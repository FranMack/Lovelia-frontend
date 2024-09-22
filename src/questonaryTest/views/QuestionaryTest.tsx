import { useContext, useEffect, useState } from "react"
import { QuestionComponent } from "../components/QuestionComponent"
import { Questions } from "../components/QuestionComponent"
import { StepContext } from "../../context/questionarySteps.context"
import { useNavigate } from "react-router-dom"
import { findYourPlan } from "../assets/auxiliarFunctions"

const quetion1:Questions={title:"¿Cuál es tu edad?",options:[{choice:"20 -30 años",selected:false},{choice:"30 -40 años",selected:false},{choice:"40 -50 años",selected:false},{choice:"+ 50 años",selected:false}]}
const quetion2:Questions={title:"¿Perdiste peso y lo recuperaste varias veces?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion3:Questions={title:"¿Te salteas varias comidas al día?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion4:Questions={title:"¿Te cuesta organizarte a la hora de preparar las comidas?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion5:Questions={title:"¿La mayoría de los días no sabes qué comer?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion6:Questions={title:"¿Haces actividad física más de 3 veces por semana?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion7:Questions={title:"¿Entrenas y te gustaría estar más marcada y fibrosa?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion8:Questions={title:"¿Picoteas o comes por ansiedad entre comidas?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion9:Questions={title:"¿Si una vez te “salis de la dieta” pierdes el control total de las comidas?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
const quetion10:Questions={title:"¿Sentís que tenes grasa abdominal acumulada y te cuesta mucho bajarla?",options:[{choice:"Si",selected:false},{choice:"No",selected:false},]}
export const QuestionaryTest = () => {

 
  
  const navigate=useNavigate();

  const{step,nextStep,resetStep}=useContext(StepContext)

  const [plan,setPlan]=useState<number>(0)

  useEffect(() => {

    window.scrollTo(0, 0);


      const testJSON=localStorage.getItem("test") || "{}"
      const test=JSON.parse(testJSON)
      const planNumber=findYourPlan(test)!
      setPlan(planNumber)
   
   
  }, [step]);

  
  const linkToPlan=(idPlan:number)=>{

    localStorage.removeItem("test")
    resetStep()
    navigate(`/test-result/${idPlan}`)
  }
  
  const linkToHome=()=>{
    navigate("/")
  }
  


 
console.log("xxxxxxxxxxxxxxxx",plan)
  return (
    <section className='questionary-container leftReveal'>
      { step===0 && <> <h2>¡Hola<br/>
¿No sabes cual plan es el más adecuado para vos?
</h2>
<h3>Con estas simples preguntas puedo ayudarte, no te va a llevar más de 5 minutos!</h3>
<button onClick={nextStep}>Empezar test</button>
<button className='button-trasparente' onClick={linkToHome}>Volver al inicio</button></>}

{step===1 &&<QuestionComponent {...quetion1}/>}
{step===2 &&<QuestionComponent {...quetion2}/>}
{step===3 &&<QuestionComponent {...quetion3}/>}
{step===4 &&<QuestionComponent {...quetion4}/>}
{step===5 &&<QuestionComponent {...quetion5}/>}
{step===6 &&<QuestionComponent {...quetion6}/>}
{step===7 &&<QuestionComponent {...quetion7}/>}
{step===8 &&<QuestionComponent {...quetion8}/>}
{step===9 &&<QuestionComponent {...quetion9}/>}
{step===10 &&<QuestionComponent {...quetion10}/>}

{ step===11 && <> <h2 className="result-title">¡Todo listo!
</h2>
<h3 className="result-secundaryTitle">Tengo el plan que se adapta<br/> perfecto a vos</h3>
<button onClick={()=>linkToPlan(plan)}>Ver resultado</button>
</>}
    </section>
  )
}
