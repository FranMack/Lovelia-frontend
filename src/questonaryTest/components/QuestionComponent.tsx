import { useContext, useState } from "react";
import { TopBar } from "./TopBar";
import { StepContext } from "../../context/questionarySteps.context";


interface Choice{
    choice:string,
    selected:boolean
}

export interface Questions{
    title:string;
    options:Choice[]
}

export const QuestionComponent = ({title,options}:Questions) => {

    const{nextStep,previousStep}=useContext(StepContext)

    const [answer,setAnswer]=useState<string>("")
    const [warning,setWarning]=useState<boolean>(false)

    const nextStepWrapper=()=>{
        if(answer){
            nextStep()
            setWarning(false)
        }
        else{
            setWarning(true)
        }
    }
  

    const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);

       
            const testJSON = localStorage.getItem('test') || "{}";
            const test = JSON.parse(testJSON);
            test[title]=event.target.value
            localStorage.setItem("test",JSON.stringify(test))
            setWarning(false)
       
     
    };



  return (
    <div className='question-component-container'>
        <TopBar/>
        <h2>{title}</h2>
        <div className='question-component-options-container'>
        {options.map((item)=>{
            return(
                <label className={warning ? "warning":""} >
                    <input  type="radio"name={item.choice} value={item.choice} checked={answer === item.choice} onChange={handleAnswer} />
                     {item.choice}
                   
                </label>
            )
        })}
        </div>
        {warning && <span>Por favor, selecciona una respuesta para continuar</span>}
        <div className='question-component-buttons-container'>
            <button onClick={previousStep}>Anterior</button>
            <button onClick={nextStepWrapper}>Siguiente</button>
        </div>
    </div>
  )
}
