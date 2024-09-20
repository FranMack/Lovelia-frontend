import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../../assets/icons/icons"




interface IntentionOption {
    id:number
    title: string;
    text: string;
    image: string;
  }
  
  type Intentions = IntentionOption[];
  
  interface GridIntentionsProps {
    intentions: Intentions;
  }


export const GridIntentions = ({intentions}:GridIntentionsProps) => {

  const navigate=useNavigate();
  const linkTo=(id:number)=>{
    navigate(`/intenciones/${id}`)
  }
  return (
    <div className='grid-intentions-container'>
        {intentions.map((item)=>{
            return(
                <div key={item.id} className='grid-intentions-item' onClick={()=>{linkTo(item.id)}}>
                <div className='grid-intentions-image-container'>
                <div className="icon-container"><PlayIcon/></div>
                <img src={item.image} alt={item.title}/>
                </div>
                <p><strong> {item.title}</strong></p>
                <p>{item.text}</p>
                </div>
            )
        })}
    </div>
  )
}
