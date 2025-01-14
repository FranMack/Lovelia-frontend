import { useEffect, useRef, useState } from "react";

export const useScrollReveal = <T extends HTMLElement>(className: string) => {
  const elementRef = useRef<T | null>(null); // Usa el genérico T para especificar el tipo exacto del elemento

  const[hasTrigged,setHasTrigged]=useState(false)
  useEffect(() => {
    const scrollHandler = () => {
        if(hasTrigged){return}
      const triggerBottom = window.innerHeight;

      const element = elementRef.current;
      if (element) {
        const topCoordinates = element.getBoundingClientRect().top;

        if (topCoordinates < triggerBottom) {
          element.classList.add(className);
          setHasTrigged(true)
        } 
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return elementRef; // Devuelve la referencia tipada correctamente
};
