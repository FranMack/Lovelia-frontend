import { useEffect, useState, useContext } from "react";
import { TalismanModelContext } from "../context/talismanModelContext";
import { TalismanMaterialContext } from "../context/talismanMaterialContext";
import { TalismanRockContext } from "../context/talismanModelRock";
import { TalismanChainContext } from "../context/talismaChainContext";
import { TalismanIntentionsContext } from "../context/talismanIntentionsContext";

interface Options {
  option: string;
  price: number;
}

export interface DropdownMenuOptions {
  title: string;
  options: Options[];
}

export function DropdownMenu({ title, options }: DropdownMenuOptions) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const { setPriceModel, setOptionModel } = useContext(TalismanModelContext);
  const { setPriceMaterial, setOptionMaterial } = useContext(
    TalismanMaterialContext
  );
  const { setPriceRock, setOptionRock } = useContext(TalismanRockContext);
  const { setPriceChain, setOptioChain } = useContext(TalismanChainContext);
  const { setOptionIntention } = useContext(TalismanIntentionsContext);
  

  useEffect(() => {
    if (title === "Elige el modelo") {
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
    if (title === "Elige el material del modelo") {
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

    if (title === "Elige tu piedra") {
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
    if (title === "Elige el tipo de cadena") {
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
    if (title === "Elige tu intención") {
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
    <div className="dropdown-container">
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">{title}</option>
        {optionsArray.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
