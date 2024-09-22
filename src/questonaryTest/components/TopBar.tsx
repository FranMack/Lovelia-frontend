import { useContext } from "react";
import { StepContext } from "../../context/questionarySteps.context";

const barSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const TopBar = () => {
  const { step: actualStep } = useContext(StepContext);
  return (
    <div className="top-bar-container">
      {barSteps.map((step) => {
        return (
          <div
            className={actualStep >= step ? "actual-step" : ""}
            id={`step${step}`}
            key={step}
          ></div>
        );
      })}
    </div>
  );
};
