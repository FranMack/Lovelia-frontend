import { MouseEvent, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../../assets/icons";
import { PlanOptions } from "../assets/plansData";
import { SliderCard } from "./SliderCard";

interface PlanGridOptions{
  plans:PlanOptions[]
  linkTo:(path:string)=>void
}


export function Slider({ plans,linkTo }: PlanGridOptions) {
  const slider = useRef<HTMLUListElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startScrollLeft, setStartScrollLeft] = useState<number>(0);

  const [index, setIndex] = useState<number>(0);

  const handleIndex = (direction: string) => {
    if (direction === "left") {
      if (index > 0) setIndex(index - 1);
    }

    else {
      if (index <= 3) setIndex(index + 1);
    }
  };

  const dragStart = (e: MouseEvent) => {
    const currentSlider = slider.current;
    if (currentSlider) {
      setIsDragging(true);
      currentSlider?.classList.add("dragging");
      setStartX(e.pageX);
      setStartScrollLeft(currentSlider.scrollLeft);
    }
  };

  const dragStop = (e: MouseEvent) => {
    const currentSlider = slider.current;
    if (currentSlider) {
      const currentSlider = slider.current;
      e.preventDefault();
      currentSlider?.classList.remove("dragging");
      setIsDragging(false);
    }
  };

  const dragging = (e: MouseEvent) => {
    const currentSlider = slider.current;
    if (currentSlider) {
      const currentSlider = slider.current;
      if (!isDragging) return;
      currentSlider.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
  };

  const handleScroll = (direction: string): void => {
    const currentSlider = slider.current;

    if (currentSlider) {
      const cardElement = currentSlider.querySelector(".slider-card-container");
      if (cardElement) {
        const firstCarWidth = cardElement.clientWidth;
        handleIndex(direction)
        currentSlider.scrollLeft +=
          direction === "left" ? -firstCarWidth : firstCarWidth;
      }
    }
  };

  console.log("xxxxxxxxxxxxxxx",index)

  return (
    <div className="wrapper">
     {index>0 && <div
        className="btn-previous"
        onClick={() => {
          handleScroll("left");
        }}
      >
        <ArrowLeft />
      </div>}
     {index<3 && <div
        className="btn-next"
        onClick={() => {
          handleScroll("right");
        }}
      >
        <ArrowRight />
      </div>}
      <ul
        ref={slider}
        className="slider"
        onMouseDown={dragStart}
        onMouseUp={dragStop}
        onMouseMove={dragging}
      >
        {plans.map((item, i) => {
          return <SliderCard key={i} {...item} linkTo={linkTo} />;
        })}
      </ul>
    </div>
  );
}
