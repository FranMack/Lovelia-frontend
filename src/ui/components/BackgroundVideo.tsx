import {useEffect, useRef} from 'react';
import videoHome from '../assets/videoHome.mp4';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.1;
  //   }
  // }, [videoRef]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset playback
      }
    };
  }, []);

  return (
    <>
      <section className="video-container">
        <div className="auxiliar-video-container">
          <video autoPlay muted loop playsInline ref={videoRef}>
            <source src={videoHome} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
