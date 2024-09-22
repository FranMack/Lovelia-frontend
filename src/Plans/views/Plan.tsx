import { ArrowLeft, ArrowRight } from "../../assets/icons";
import { ShopingCartContext } from "../../context/shopingCart.context";
import { plans } from "../assets/plansInfo";
import { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";



export interface ShopingCartItemOptions{
  id:number,
  product:string,
  price:number,
  image:string,
  consult:boolean,
  consultPrice:number
}



export const Plan = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [index, setIndex] = useState<number>(1);
  

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      setIndex(parseInt(id));
    }

  }, [id]);

  const handlerPage = (direction: string) => {
    if (direction === "next") {
      if (index < plans.length) {
        navigate(`/plan/${index + 1}`);
      }
      else{
        navigate(`/plan/${1}`);
      }
    } else {
      if (direction !== "next") {
        if(index>1){
          navigate(`/plan/${index - 1}`);
        }
        else{
          navigate(`/plan/${4}`);
        }
        
        
      }
    }
  };

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
    <section className="plan-container">
      <div className="plan-center-container leftReveal ">
        <div className="plan-center-top-container">
          <h2>INICIO / PLANES / TIENDA</h2>
          <div className="buttons-container">
            <button onClick={() => handlerPage("preious")}>
              <ArrowLeft />
              Anterior
            </button>
            <button onClick={() => handlerPage("next")}>
              Siguiente
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="plan-center-bottom-container">
          <div className="plan-image-container">
            <img src={plans[index - 1].image} alt="food plate" />
          </div>
          <div className="plan-info-container">
            <h3>{plans[index - 1].title}</h3>
            <h4>{consultState()?`$${plans[index - 1].price} + $${plans[index - 1].consultPrice} `:`$ ${plans[index - 1].price}`}</h4>
              <h4></h4>
            <button onClick={addToShopingCart}>Agregar al carrito</button>
            <button onClick={handleConsult} className="button-transparent">{consultState()?"Quitar consulta profesional":"Agregar consulta profesional"}</button>
            <div className="text-container">
              <h5>Descripción</h5>
              <p>
              {plans[index-1].paragraph}
              </p>
              <br />
              <p>
                Una vez que realices la compra, recibirás un formulario que me permitirá conocer mejor sobre tus habitos y métas. En 48-72 horas luego de completarlo, recibirás tu plan alimentario personalizado y guías para ayudarte a mantener tu nuevo estilo de vida.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
