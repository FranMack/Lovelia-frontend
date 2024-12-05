import { useState, useEffect, useRef } from 'react';

interface LazyOptions {
  src: string;
  alt: string;
  className?: string;
  draggable?:boolean
}

export const LazyImage = ({ src, alt, className,draggable }: LazyOptions) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Detener observación una vez visible
        }
      },
      { 
        rootMargin: '200px', // Detecta 200px antes de que la imagen entre al viewport
        threshold: 0.1 
      }
    );
  
    if (imgRef.current) {
      observer.observe(imgRef.current); // Observar la imagen
    }
  
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current); // Des-observar si current no es null
      }
    };
  }, []);
  

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={className}
      draggable={draggable}
       loading="lazy"
    />
  );
};

