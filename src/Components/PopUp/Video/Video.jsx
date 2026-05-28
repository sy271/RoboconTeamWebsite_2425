import React, { useState, useEffect, useRef } from 'react';
import './Video.css';
import VideoFile from './Promo10.mp4';

const VideoPlayer = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    console.log('Video component mounted');
    // Log to verify the video source
    console.log('Video src:', VideoFile);

    // Add event listeners to video element
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
      videoElement.addEventListener('canplay', handleCanPlay);
      
      // Force controls to be visible
      videoElement.controls = true;
    }

    return () => {
      // Clean up event listeners
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
        videoElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  const handleVideoLoaded = () => {
    console.log('Video loaded');
    setLoading(false);
  };

  const handleCanPlay = () => {
    console.log('Video can play');
    setLoading(false);
  };

  const handleError = (e) => {
    console.error('Video loading error:', e);
    setError(true);
    setLoading(false);
  };

  return (
    <div className="video-container">
      {loading && (
        <div className="video-loading">
          <p>Loading video...</p>
        </div>
      )}
      
      {error ? (
        <div className="video-error">
          <p>Video could not be loaded. Please try again later.</p>
        </div>
      ) : (
        <video 
          ref={videoRef}
          controls 
          playsInline
          autoPlay 
          preload="auto"
          className="video-element"
          onError={handleError}
          controlsList="nodownload"
        >
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
