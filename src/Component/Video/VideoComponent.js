import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from './video.mp4';

const centerVideoStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Adjust the height to center vertically on the page
  width: '100vw', // Adjust the height to center vertically on the page
};

export default function VideoComponent() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const initialPlaybackSpeed = 0.4; // Set the initial playback speed here

  function handleVideoEnd() {
    // Redirect to the '/RedirectComponent' route when the video ends
    navigate('/RedirectComponent');
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Mute the video
      videoRef.current.autoplay = true; // Autoplay the video
      videoRef.current.playbackRate = initialPlaybackSpeed; // Set the initial playback speed
      videoRef.current.onended = handleVideoEnd; // Set the onEnded event handler
    }
  }, [initialPlaybackSpeed]);

  return (
    <div style={centerVideoStyle}>
      <video ref={videoRef} className="video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
