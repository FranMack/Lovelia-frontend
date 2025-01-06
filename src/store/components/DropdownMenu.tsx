import {useContext, useEffect, useState} from 'react';
import {TalismanModelContext} from '../../context/talismanModelContext';

interface Options {
  option: string;
}

export interface DropdownMenuOptions {
  title: string;
  options: Options[];
  validationError?: boolean;
  initialValue?: string;
}

export function DropdownMenu({
  title,
  options,
  validationError,
  initialValue = '',
}: DropdownMenuOptions) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const {
    optionModel,
    optionMetal,
    optionChain,
    optionRock,
    optionIntention,
    setOptionModel,
    setOptionMetal,
    setOptionRock,
    setOptioChain,
    setOptionIntention,
  } = useContext(TalismanModelContext);

  useEffect(() => {
    if (
      !optionModel &&
      !optionMetal &&
      !optionChain &&
      !optionRock &&
      !optionIntention
    ) {
      setSelectedOption('');
    }
  }, [optionModel]);

  useEffect(() => {
    if (!selectedOption) {
      setSelectedOption(initialValue);
    }

    if (title === 'Modelo') {
      if (selectedOption) {
        const optionContex = options.find(item => {
          return item.option === selectedOption;
        });
        setOptionModel(optionContex!.option!);
      } else {
        setOptionModel('');
      }
    }
    if (title === 'Metal') {
      if (selectedOption) {
        const optionContex = options.find(item => {
          return item.option === selectedOption;
        });
        setOptionMetal(optionContex!.option!);
      } else {
        setOptionMetal('');
      }
    }

    if (title === 'Piedra') {
      if (selectedOption) {
        const optionContex = options.find(item => {
          return item.option === selectedOption;
        });
        setOptionRock(optionContex!.option!);
      } else {
        setOptionRock('');
      }
    }
    if (title === 'Colgante') {
      if (selectedOption) {
        const optionContex = options.find(item => {
          return item.option === selectedOption;
        });
        setOptioChain(optionContex!.option!);
      } else {
        setOptioChain('');
      }
    }
    if (title === 'Intención') {
      if (selectedOption) {
        const optionContex = options.find(item => {
          return item.option === selectedOption;
        });
        setOptionIntention(optionContex!.option!);
      } else {
        setOptionIntention('');
      }
    }
  }, [selectedOption]);

  const optionsArray = options.map(item => {
    return item.option;
  });

  return (
    <div
      className={`dropdown-container ${
        validationError ? 'dropdown-error' : ''
      }`}>
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
      {validationError && <p>Campo requerido</p>}
    </div>
  );
}
