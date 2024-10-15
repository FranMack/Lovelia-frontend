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
          observer.disconnect(); // Desconectar el observer una vez que la imagen es visible
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current); // Observa la imagen
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current); // Des-observar solo si current no es null
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

