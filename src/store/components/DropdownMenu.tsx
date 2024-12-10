import { useEffect, useState, useContext } from "react";
import { TalismanModelContext } from "../../context/talismanModelContext";

interface Options {
  option: string;
  price: number;
}

export interface DropdownMenuOptions {
  title: string;
  options: Options[];
  validationError?:boolean
}

export function DropdownMenu({ title, options,validationError }: DropdownMenuOptions) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const {
    optionModel,
    optionMaterial,
    optionChain,
    priceChain,
    optionRock,
    optionIntention,
    setPriceModel,
    setOptionModel,
    setPriceMaterial,
    setOptionMaterial,
    setPriceRock,
    setOptionRock,
    setPriceChain,
    setOptioChain,
    setOptionIntention,
  } = useContext(TalismanModelContext);

  useEffect(() => {
    if (
      !optionModel &&
      !optionMaterial &&
      !optionChain &&
      !priceChain &&
      !optionRock &&
      !optionIntention
    ) {
      setSelectedOption("");
    }
  }, [optionModel]);

  useEffect(() => {
    if (title === "Modelo") {
      if (selectedOption) {
        let optionContex = options.find((item) => {
          return item.option === selectedOption;
        });
        setOptionModel(optionContex?.option!);
        setPriceModel(optionContex?.price!);
      } else {
        setOptionModel("");
        setPriceModel(0);
      }
    }
    if (title === "Metal") {
      if (selectedOption) {
        let optionContex = options.find((item) => {
          return item.option === selectedOption;
        });
        setOptionMaterial(optionContex?.option!);
        setPriceMaterial(optionContex?.price!);
      } else {
        setOptionMaterial("");
        setPriceMaterial(0);
      }
    }

    if (title === "Piedra") {
      if (selectedOption) {
        let optionContex = options.find((item) => {
          return item.option === selectedOption;
        });
        setOptionRock(optionContex?.option!);
        setPriceRock(optionContex?.price!);
      } else {
        setOptionRock("");
        setPriceRock(0);
      }
    }
    if (title === "Colgante") {
      if (selectedOption) {
        let optionContex = options.find((item) => {
          return item.option === selectedOption;
        });
        setOptioChain(optionContex?.option!);
        setPriceChain(optionContex?.price!);
      } else {
        setOptioChain("");
        setPriceChain(0);
      }
    }
    if (title === "Intención") {
      if (selectedOption) {
        let optionContex = options.find((item) => {
          return item.option === selectedOption;
        });
        setOptionIntention(optionContex?.option!);
      } else {
        setOptionIntention("");
      }
    }
  }, [selectedOption]);

  const optionsArray = options.map((item) => {
    return item.option;
  });

  return (
    <div className={`dropdown-container ${validationError ? "dropdown-error":""}`}>
      <select  value={selectedOption} onChange={handleSelectChange}>
        <option value="">{title}</option>
        {optionsArray.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
      {validationError && <p>Campo requerido</p>}
    </div>
  );
}
