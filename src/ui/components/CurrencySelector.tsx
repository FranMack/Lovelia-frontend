import { useContext, useEffect, useRef, useState } from 'react';
import { CurrencyContext } from '../../context/currencyContext';
import argentinaFlag from "../../assets/flags/bandera_ar.webp";
import mexicoFlag from "../../assets/flags/bandera_mexico.webp";
import restOfWorldFlag from "../../assets/flags/bandera_restWorld.webp"

interface CountryProp {
  id: number;
  name: string;
  flag: string;
}

export const CurrencySelector = () => {
  const { currency, handleCurrency } = useContext(CurrencyContext);
  const countries: CountryProp[] = [
    {
      id: 1,
      name: 'Argentina',
      flag: argentinaFlag,
    },
    {
      id: 2,
      name: 'Mexico',
      flag: mexicoFlag,
    },
    {
      id: 3,
      name: 'R.D.M',
      flag: restOfWorldFlag,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(() =>
    countries.find((item) => item.name === currency)
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (country: CountryProp) => {
    setSelectedCountry(country);
    handleCurrency(country.name);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select country">
        <div className="dropdown-selected">
          {selectedCountry ? (
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} flag`}
              className="dropdown-flag"
            />
          ) : (
            <span className="dropdown-placeholder">Select Country</span>
          )}
          <span>{selectedCountry ? selectedCountry.name : ''}</span>
        </div>
      </button>
      {isOpen && (
        <div className="dropdown-menu" role="listbox">
          {countries.map((country) => (
            <div
              key={country.id}
              className="dropdown-item"
              onClick={() => handleSelect(country)}
              role="option"
              aria-selected={selectedCountry?.id === country.id}>
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
