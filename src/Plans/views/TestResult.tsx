import { useNavigate, useParams } from "react-router-dom";
import { testResults } from "../assets/testResultInfo"
import { useContext, useEffect, useState } from "react";
import { plans } from "../assets/plansInfo";
import { ShopingCartItemOptions } from "./Plan";
import { ShopingCartContext } from "../../context/shopingCart.context";

export const TestResult = () => {


  const navigate = useNavigate();

  const linkToPlans=()=>{
    navigate("/#plans")
  }
  const linkToTest=()=>{
    navigate("/test")
  }

  const { id } = useParams();

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      setIndex(parseInt(id));
    }
  }, [id]);


  const {toggleMenu,shopingCartItems, setShopingCartItems}=useContext(ShopingCartContext)



 

 



  const addToShopingCart=()=>{

    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCart:ShopingCartItemOptions[] = JSON.parse(shopingCartJSON);

    const shopingCartNewItem:ShopingCartItemOptions = {
      id:index,
      product:plans[index-1].title,
      price:plans[index-1].price,
      image:plans[index - 1].image,
      consult:false,
      consultPrice:plans[index - 1].consultPrice
  
    };

    if(shopingCart.find((item)=>{return item.id===index})){

    
      toggleMenu()
      return
    }

    const shopingCartUpdate = [shopingCartNewItem, ...shopingCart];
    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdate));
    setShopingCartItems(shopingCartUpdate)

    toggleMenu()

  }

  const handleConsult=()=>{
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCart:ShopingCartItemOptions[] = JSON.parse(shopingCartJSON);
    if(!shopingCart.find((item)=>{return item.id===index})){

      alert("Debes agregar un plan y luego la consulta")
      return
    }

    const shopingCartUpdate=shopingCart.map((item)=>{
      if(item.id===index){
        return {...item,consult:!item.consult}
      }
      else{
        return item
      }
    })

    

    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdate));
    setShopingCartItems(shopingCartUpdate)
 

  }


  const consultState=()=>{

    return shopingCartItems.find((item)=>{ if(item.id===index && item.consult){return item}})
  }




  


  return (
    <section className='test-result-container' style={{backgroundColor:testResults[index-1].background}}>

        <div className='test-result-center-container leftReveal' style={{borderColor:testResults[index-1].color}}>
            <div className='internal-container'>
            <h2 style={{color:testResults[index-1].color}}>PLANES</h2>
            <h3>{testResults[index-1].title}</h3>
            <p>{testResults[index-1].paragraph}</p>

            <button onClick={addToShopingCart} style={{backgroundColor:testResults[index-1].color}}>Lo quiero</button>
            <button onClick={handleConsult} className="button-transparent" style={{borderColor:testResults[index-1].color,color:testResults[index-1].color}} >{consultState()?"Quitar consulta profesional":"Agregar consulta profesional"}</button>
            
            </div>

            <div className='internal-container'>
              <h4>El plan incluye:</h4>
              <ul>
                {testResults[index-1].items.map((item,i)=>{return(<li key={i}>
                  {item}
                </li>)})}
              </ul>
              <div>
              <h5 style={{color:testResults[index-1].color}}>
              {consultState()?`$${plans[index - 1].price} + $${plans[index - 1].consultPrice} `:`$ ${plans[index - 1].price}`}
              </h5>
            
              </div>
              <div className='bottom-container'>
                <span onClick={linkToTest}>Hacer nuevamente el test</span>
                <span onClick={linkToPlans}>Ver todos los planes</span>
              </div>

            </div>

        </div>

    </section>
  )
}
