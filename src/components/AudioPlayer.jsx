import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  
  // Load mute preference from localStorage on component mount
  useEffect(() => {
    const storedMuteState = localStorage.getItem('audioMuted');
    if (storedMuteState !== null) {
      setIsMuted(storedMuteState === 'true');
    }
    
    // Set up click handler for the entire document
    const handleDocumentClick = () => {
      setHasInteracted(true);
    };
    
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentClick);
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentClick);
    };
  }, []);
  
  // Save mute preference whenever it changes
  useEffect(() => {
    if (hasInteracted) {
      localStorage.setItem('audioMuted', isMuted);
    }
    
    // Apply mute state to audio element
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted, hasInteracted]);
  
  // Handle scroll events to play audio
  useEffect(() => {
    const handleScroll = () => {
      if (hasInteracted && !isPlaying && !isMuted && audioRef.current) {
        try {
          // Try to play the audio
          const playPromise = audioRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch(error => {
                console.error('Audio playback error:', error);
              });
          }
        } catch (error) {
          console.error('Error playing audio:', error);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInteracted, isPlaying, isMuted]);
  
  // Handle audio ended event
  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };
    
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, []);
  
  // Toggle audio function
  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      // If playing, toggle mute state
      setIsMuted(!isMuted);
    } else {
      // If not playing, start playing
      setIsMuted(false);
      
      try {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(error => {
              console.error('Audio playback error:', error);
            });
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };
  
  return (
    <div>
      <audio 
        ref={audioRef} 
        preload="auto"
        src="/sounds/jingle.mp3"
        loop
      >
        Your browser does not support the audio element.
      </audio>
      
      <button 
        onClick={toggleAudio}
        className={`fixed bottom-6 right-6 z-50 ${
          isPlaying 
            ? 'bg-white/80 hover:bg-white' 
            : 'bg-blue-500/90 hover:bg-blue-500 animate-pulse'
        } backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
        aria-label={
          !isPlaying 
            ? "Play jingle" 
            : isMuted 
              ? "Unmute jingle" 
              : "Mute jingle"
        }
      >
        {!isPlaying ? (
          // Play icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : isMuted ? (
          // Muted icon (volume off)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          // Unmuted icon (volume on)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
      
      {/* Tooltip that shows different messages based on state */}
      {(!hasInteracted || !isPlaying || isMuted) && (
        <div className="fixed bottom-20 right-6 z-50 bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md text-sm animate-bounce">
          {!hasInteracted ? "Click anywhere to unmute jingle" : 
           !isPlaying ? "Click to play jingle" : 
           isMuted ? "Click to unmute jingle" : ""}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
