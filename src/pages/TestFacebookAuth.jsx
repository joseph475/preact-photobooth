import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import testFacebookAuth from '../services/test-facebook-auth';
import { getFacebookAccessToken, logout, isHttps } from '../services/facebookAuth';

/**
 * Test page for Facebook Authentication
 * This page provides a UI to test the Facebook authentication service
 */
const TestFacebookAuth = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testResults, setTestResults] = useState([]);
  const [httpsWarning, setHttpsWarning] = useState(!isHttps());

  // Function to add a log message to the test results
  const addLog = (message, type = 'info') => {
    setTestResults(prev => [...prev, { message, type, timestamp: new Date() }]);
  };

  // Function to run the Facebook authentication test
  const runTest = async () => {
    setLoading(true);
    setError(null);
    setTestResults([]);
    setToken(null);
    
    try {
      addLog('Starting Facebook Authentication test...', 'info');
      
      // Check HTTPS first
      if (!isHttps()) {
        addLog('WARNING: HTTPS is required for Facebook Login', 'error');
        addLog('Please use the development server with HTTPS enabled:', 'info');
        addLog('npm run dev', 'info');
      }
      
      // Run the test function
      await testFacebookAuth();
      
      // Get the token to display
      const accessToken = await getFacebookAccessToken();
      if (accessToken) {
        setToken(accessToken);
        addLog('Test completed successfully!', 'success');
      } else {
        // This is not necessarily an error, as the user might have cancelled the login
        addLog('No access token obtained. This could be because:', 'info');
        addLog('1. You cancelled the Facebook login', 'info');
        addLog('2. The Facebook app is not configured correctly', 'info');
        addLog('3. The page is not served over HTTPS', 'info');
      }
    } catch (err) {
      setError(err.message);
      addLog(`Test encountered an error: ${err.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    logout();
    setToken(null);
    addLog('Logged out and cleared stored tokens', 'info');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Facebook Authentication Test</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Use this page to test your Facebook authentication configuration
          </p>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Test Your Configuration</h2>
            
            {httpsWarning && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
                <p className="font-bold">HTTPS Required</p>
                <p>Facebook Login requires HTTPS. You are currently using HTTP.</p>
                <p className="mt-2">Please use the development server with HTTPS enabled:</p>
                <pre className="bg-gray-100 p-2 mt-2 rounded-md overflow-x-auto">
                  <code>npm run dev</code>
                </pre>
                <p className="mt-2">This will start the server with HTTPS enabled.</p>
              </div>
            )}
            
            <p className="text-gray-600 mb-6">
              This tool will test your Facebook authentication configuration by attempting to initialize the Facebook SDK and obtain an access token.
              Make sure you have set up your Facebook App ID and App Secret in the <code className="bg-gray-100 px-2 py-1 rounded">.env</code> file.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={runTest}
                disabled={loading}
                className={`px-6 py-2 rounded-md text-white font-medium ${
                  loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running Test...
                  </span>
                ) : 'Run Authentication Test'}
              </button>
              
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
              >
                Clear Stored Tokens
              </button>
            </div>
            
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}
            
            {token && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
                <p className="font-bold">Success!</p>
                <p>Successfully obtained a Facebook access token.</p>
                <p className="mt-2">
                  <span className="font-semibold">Token:</span>{' '}
                  <span className="font-mono text-sm">
                    {token.substring(0, 10)}...{token.substring(token.length - 5)}
                  </span>
                </p>
              </div>
            )}
            
            {/* Test Results Log */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Test Results</h3>
              
              <div className="bg-gray-100 rounded-md p-4 h-64 overflow-y-auto font-mono text-sm">
                {testResults.length === 0 ? (
                  <p className="text-gray-500">Run the test to see results...</p>
                ) : (
                  testResults.map((log, index) => (
                    <div 
                      key={index} 
                      className={`mb-1 ${
                        log.type === 'error' ? 'text-red-600' : 
                        log.type === 'success' ? 'text-green-600' : 'text-gray-800'
                      }`}
                    >
                      <span className="text-gray-500">[{log.timestamp.toLocaleTimeString()}]</span>{' '}
                      {log.message}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Troubleshooting</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Facebook App Configuration</h3>
                <p className="text-gray-600">
                  Make sure your Facebook App is properly configured in the Facebook Developer Dashboard:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
                  <li>App is in "Live" mode (not "Development")</li>
                  <li>Facebook Login product is added to your app</li>
                  <li>Valid OAuth Redirect URIs include your website URL</li>
                  <li>Client OAuth Login is enabled</li>
                  <li>Web OAuth Login is enabled</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Environment Variables</h3>
                <p className="text-gray-600">
                  Check that your <code className="bg-gray-100 px-2 py-1 rounded">.env</code> file contains the correct values:
                </p>
                <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                  <code>
                    PREACT_APP_FACEBOOK_APP_ID=your_facebook_app_id{'\n'}
                    PREACT_APP_FACEBOOK_APP_SECRET=your_facebook_app_secret
                  </code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Browser Console</h3>
                <p className="text-gray-600">
                  Check the browser console (F12) for more detailed error messages that might help identify the issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestFacebookAuth;
