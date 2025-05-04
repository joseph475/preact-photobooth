import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

/**
 * Simple audio player component that plays a jingle when the user interacts with the site.
 * The audio can be muted/unmuted using a button.
 */
const AudioPlayer = () => {
  // Simple state management
  const [isMuted, setIsMuted] = useState(false); // Start unmuted by default
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  
  // Load mute preference on mount
  useEffect(() => {
    try {
      const storedMuteState = localStorage.getItem('audioMuted');
      if (storedMuteState !== null) {
        setIsMuted(storedMuteState === 'true');
      }
    } catch (error) {
      console.error('Error loading audio preferences:', error);
    }
  }, []);
  
  // Save mute preference when it changes
  useEffect(() => {
    try {
      localStorage.setItem('audioMuted', isMuted);
    } catch (error) {
      console.error('Error saving audio preferences:', error);
    }
    
    // Apply mute state to audio element
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);
  
  // Handle user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        
        // Try to play audio if not muted
        if (!isMuted && audioRef.current) {
          try {
            audioRef.current.play();
          } catch (error) {
            console.error('Error playing audio:', error);
          }
        }
      }
    };
    
    // Add event listeners
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted, isMuted]);
  
  // Toggle mute state
  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent triggering document click
    setIsMuted(!isMuted);
    
    // If unmuting and audio exists, try to play it
    if (isMuted && audioRef.current) {
      try {
        audioRef.current.play();
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };
  
  return (
    <div>
      {/* Audio element with loop enabled */}
      <audio 
        ref={audioRef} 
        src="/sounds/jingle.mp3"
        loop
        preload="auto"
      />
      
      {/* Audio control button */}
      <button 
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? "Unmute jingle" : "Mute jingle"}
      >
        {isMuted ? (
          // Muted icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          // Unmuted icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
      
      {/* Tooltip */}
      {!hasInteracted && (
        <div className="fixed bottom-20 right-6 z-50 bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md text-sm animate-bounce">
          Click anywhere to start jingle
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
