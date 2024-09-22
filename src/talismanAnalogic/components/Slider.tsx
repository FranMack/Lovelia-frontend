import { MouseEvent, useRef, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../assets/icons/icons";
import { SliderCard } from "./SlideCard";
import { SliderCardOptions } from "./SlideCard";

export interface SliderOptions {
  sliderInfo: SliderCardOptions[];
}

export function Slider({ sliderInfo }: SliderOptions) {
  const slider = useRef<HTMLUListElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startScrollLeft, setStartScrollLeft] = useState<number>(0);

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
      const cardElement = currentSlider.querySelector(".card");
      if (cardElement) {
        const firstCarWidth = cardElement.clientWidth;

        currentSlider.scrollLeft +=
          direction === "left" ? -firstCarWidth : firstCarWidth;
      }
    }
  };

  return (
    <div className="wrapper">
      <div
        className="btn-previous"
        onClick={() => {
          handleScroll("left");
        }}
      >
        <LeftArrowIcon color="#fff" />
      </div>
      <div
        className="btn-next"
        onClick={() => {
          handleScroll("right");
        }}
      >
        <RightArrowIcon color="#fff" />
      </div>
      <ul
        ref={slider}
        className="slider"
        onMouseDown={dragStart}
        onMouseUp={dragStop}
        onMouseMove={dragging}
      >
        {sliderInfo.map((slide, i) => {
          return (
            <SliderCard
              key={i}
              image={slide.image}
              text={slide.text}
              title={slide.title}
            />
          );
        })}
      </ul>
    </div>
  );
}
