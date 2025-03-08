import { Button } from "../../ui/components";
import { CurrencyContext } from "../../context/currencyContext";
import { useContext, useState } from "react";

export const CurrencyModal = () => {

    const {handleCurrency,currency}=useContext(CurrencyContext)

    const [selectedCurrency,setSelectedCurrency]=useState(currency)
     const handleSelectedCurrency=(event: React.ChangeEvent<HTMLSelectElement>)=>{

  setSelectedCurrency(event.target.value)
     }
  
  return (
    <div className="currencyModal-container">
      <div className="currencyModal-centar-container">
        <h6>¿ Desde dónde estás comprando ?</h6>

        <select value={selectedCurrency} onChange={handleSelectedCurrency}>
          <option value="">País</option>
          <option value="Argentina">Argentina</option>
          <option value="Mexico">Mexico</option>
          <option value="R.D.M">Resto del mundo</option>
        </select>

        <Button text="Continuar" onClick={()=>handleCurrency(selectedCurrency)}/>
            
       
      </div>
    </div>
  );
};
