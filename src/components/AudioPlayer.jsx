import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

/**
 * Simple audio player component that plays a jingle when the user interacts with the site.
 * The audio can be muted/unmuted using a button.
 */
const AudioPlayer = ({ isScrollToTopVisible }) => {
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
    e.preventDefault(); // Prevent any default behavior
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
    <div className="audio-player-container" style={{ position: 'relative', zIndex: 9999 }}>
      {/* Audio element with loop enabled */}
      <audio 
        ref={audioRef} 
        src="/sounds/jingle.mp3"
        loop
        preload="auto"
      />
      
      {/* Audio control button - positioned to avoid overlap */}
      <div 
        className="fixed left-6 bottom-6 z-[200] pointer-events-auto" 
        style={{ touchAction: 'manipulation' }}
      >
        <button 
          onClick={toggleMute}
          className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center"
          aria-label={isMuted ? "Unmute jingle" : "Mute jingle"}
          style={{ cursor: 'pointer' }}
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
      </div>
      
      {/* Tooltip */}
      {!hasInteracted && (
        <div className="fixed left-6 bottom-20 z-[200] bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md text-sm animate-bounce">
          Click anywhere to start jingle
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
