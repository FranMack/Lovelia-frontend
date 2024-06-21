import { useEffect, useRef, useState } from "react";
import { infoPiedras } from "../assets/images/piedras/infoPiedras";
import { ButtonArrowLeft } from "../commons/ButtonArrowLeft";
import { ButtonArrowRight } from "../commons/ButtonArrowRight";

export function Carrusel3D() {
  const galleryContainer = useRef<HTMLDivElement>(null);

  const [clases, setClases] = useState<string[]>([]);
  const [position, setPosition] = useState<number>(2);

  function handlePositionNext() {
    if (position === 4) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }
  function handlePositionPrevious() {
    if (position === 0) {
      setPosition(4);
    } else {
      setPosition(position - 1);
    }
  }

  // TODO currentGalleryContainer?.children
  useEffect(() => {
    const currentGalleryContainer = galleryContainer.current;
    const currentItems = Array.from(currentGalleryContainer!.children!);

    const currentClases = currentItems.map((item) => {
      return item.className.split(" ")[1];
    });

    setClases(currentClases);
  }, []);

  const handleInfo = (direction: string) => {
    const currentGalleryContainer = galleryContainer.current;
    const currentItems = Array.from(currentGalleryContainer!.children!);

    const newOrderClases = [...clases];

    if (direction === "previous") {
      newOrderClases.unshift(newOrderClases.pop()!);
      handlePositionPrevious();
    } else {
      newOrderClases.push(newOrderClases.shift()!);
      handlePositionNext();
    }

    currentItems.forEach((item) => {
      item.classList.remove("gallery-item-1");
      item.classList.remove("gallery-item-2");
      item.classList.remove("gallery-item-3");
      item.classList.remove("gallery-item-4");
      item.classList.remove("gallery-item-5");
    });

    for (let i = 0; i < currentItems.length; i++) {
      currentItems[i].classList.add(newOrderClases[i]);
    }

    setClases(newOrderClases);
  };

  return (
    <>
      <div className="carrusel3d-container">
        <div ref={galleryContainer} className="gallery-container">
          {infoPiedras.map((piedra, i) => {
            return (
              <div
                key={i}
                className={`gallery-item ${piedra.className}`}
                data-index={piedra.dataIndex}
              >
                <img src={piedra.image} alt={piedra.name} />
              </div>
            );
          })}
        </div>
        <div className="carousel-info-container">
          <h4>{infoPiedras[position].name}</h4>
          <p>{infoPiedras[position].description}</p>
        </div>
        <div className="controlls-container">
          <ButtonArrowLeft
            text="Atras"
            color="#6f3289"
            onClick={() => handleInfo("previous")}
          />

          <div className="bullet-container">
            {infoPiedras.map((_, i) => {
              return position === i ? (
                <div key={i} className="bullet-selected"></div>
              ) : (
                <div key={i} className="bullet"></div>
              );
            })}
          </div>

          <ButtonArrowRight
            text="Siguiente"
            color="#6f3289"
            onClick={() => handleInfo("next")}
          />
        </div>
      </div>
    </>
  );
}
