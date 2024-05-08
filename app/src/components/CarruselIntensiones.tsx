import { useEffect, useRef, useState } from "react";
import { infoCarrusel } from "../assets/images/carrusel-intenciones/infoCarrusel"
import { ButtonArrowLeft } from "../commons/ButtonArrowLeft"
import { ButtonArrowRight } from "../commons/ButtonArrowRight"
import { LeftArrowIcon, RightArrowIcon } from "../assets/images/icons/icons";

export function CarruselIntensiones(){

  const galleryContainer = useRef<HTMLDivElement>(null);

  const [clases, setClases] = useState<string[]>([]);
  const [position,setPosition]=useState<number>(2)


  function handlePositionNext(){
    if(position===7){
      setPosition(0)
    }
    else{
      setPosition(position+1)
    }
  }
  function handlePositionPrevious(){
    if(position===0){
      setPosition(7)
    }
    else{
      setPosition(position-1)
    }
  }


  useEffect(() => {
    const currentGalleryContainer = galleryContainer.current;
    const currentItems = Array.from(currentGalleryContainer?.children!);

    const currentClases = currentItems.map((item) => {
      return item.className.split(" ")[1];
    });

    setClases(currentClases);
  }, []);

  const handleInfo = (direction: string) => {
    const currentGalleryContainer = galleryContainer.current;
    const currentItems = Array.from(currentGalleryContainer?.children!);

    const newOrderClases = [...clases];

    if (direction === "previous") {
      newOrderClases.unshift(newOrderClases.pop()!);
      handlePositionPrevious()
    } else {
      newOrderClases.push(newOrderClases.shift()!);
      handlePositionNext()
    }

    currentItems.forEach((item) => {
      item.classList.remove("intensiones-gallery-item-1");
      item.classList.remove("intensiones-gallery-item-2");
      item.classList.remove("intensiones-gallery-item-3");
      item.classList.remove("intensiones-gallery-item-4");
      item.classList.remove("intensiones-gallery-item-5");
      item.classList.remove("intensiones-gallery-item-6");
      item.classList.remove("intensiones-gallery-item-7");
      item.classList.remove("intensiones-gallery-item-8");
    });

    for (let i = 0; i < currentItems.length; i++) {
      currentItems[i].classList.add(newOrderClases[i]);
    }

    setClases(newOrderClases);
  };


    return(<>

    <div className="carrousel-intensiones-container">

    <div ref={galleryContainer} className="intensiones-gallery-container">

   {infoCarrusel.map((item,i)=>{

    return(
        <div
              key={i}
              className={`intensiones-gallery-item ${item.className}`}
              data-index={item.dataIndex}
            >
              <img src={item.image} alt={item.title} />
              <div className="carruselCard-info-container">
        <h4>{item.title}</h4>
        <p>{item.text}</p>
        <button>Ver mas</button>
        </div>
            </div>
    )
   })}


    </div>

    <div
        className="carrusel-intensiones-btn-previous"
        onClick={() => {
          handleInfo("previous");
        }}
      >
        <LeftArrowIcon color="#fff" />
      </div>
      <div
        className="carrusel-intensiones-btn-next"
        onClick={() => {
          handleInfo("next");
        }}
      >
        <RightArrowIcon color="#fff" />
      </div>
      </div>

    
    </>)
}