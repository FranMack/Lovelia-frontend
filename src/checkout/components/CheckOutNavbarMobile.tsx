import {ButtonArrowRight} from '../../ui/components';

interface CheckOutNavbarOptions {
  sections: string[];
  handleButtonFocus: (item: string) => void;
  buttonFocusPosition: string;
}

export const CheckOutNavbarMobile = ({
  sections,
  buttonFocusPosition,
  handleButtonFocus,
}: CheckOutNavbarOptions) => {
  const handlePreviousStep = () => {
    const index = sections.indexOf(buttonFocusPosition);

    const previousButton = index > 0 ? sections[index - 1] : sections[0];

    handleButtonFocus(previousButton);
  };
  return (
    <>
      <br/>
      <br/>
    {sections.indexOf(buttonFocusPosition)>0&& <div className="checkOutNavbarMobile-container">
      
        <ButtonArrowRight
          onClick={handlePreviousStep}
          text="Volver Atras"
          color="#6f3289"
        />
    </div>
      }
    </>
  );
};
