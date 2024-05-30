import { useNavigate } from "react-router-dom";
import { CloseIcon } from "../assets/images/icons/icons"
import { ButtonWide } from "../commons/ButtonWide"
import { ShopingCartContext } from "../context/modalShopingCart";
import { useContext, useEffect, useState  } from "react";


export interface ProductosOptions{
    id:number,
    product:string,
    quantity:number,
    model:string,
    material:string,
    chain:string,
    intention:string,
    image:string,
    price:number
}

export function ShopingCart(){

    const navigate=useNavigate()

    const{togleMenu}=useContext(ShopingCartContext)



    const [shopingCartItems, setShopingCartItems] = useState<ProductosOptions[]>([]);

    useEffect(() => {
      const shopingCartJSON = localStorage.getItem('shopingCart') || "[]";
      setShopingCartItems(JSON.parse(shopingCartJSON));
    }, []);


    const totalPrice = () => {
        return shopingCartItems.reduce((acc, item) => acc + item.price, 0);
      };


      const deleteShopingCartItem=(id:number)=>{

        const shopingCartUpdated=shopingCartItems.filter((item)=>{if(item.id !==id){return item}})
            localStorage.setItem('shopingCart', JSON.stringify(shopingCartUpdated)); 
        setShopingCartItems(shopingCartUpdated)


      }

const linkToCheckOut=()=>{
    navigate("checkout/store")
    togleMenu()
}
 


    return (
        <div className="shoping-cart-conteiner shopingCartReveal">
            <div className="shoping-cart-top-container">
                <div className="shoping-cart-title">
                <h4>Carrito de compras</h4>
                <CloseIcon onClick={togleMenu}/>
                </div>
            </div>
            
            <div className="shoping-cart-center-container">
                {
                    shopingCartItems.map((item)=>{

                        return(<div key={item.id} className="shoping-cart-card-container">
                            <img src={item.image} alt={item.product} />
                            <div className="card-info-container">
                                <div className="card-title">
                            <h4>{item.product}</h4>
                            <CloseIcon onClick={()=>{deleteShopingCartItem(item.id)}}/>
                                </div>
                            <table>
        <tr>
    <th className="">Cantidad</th>
    <th className="">Modelo</th>
    <th className="">Material</th>
    <th className="">Colgado</th>
    <th className="">Intension</th>
    </tr>
    <tr>
    <td className="">{item.quantity}</td>
    <td className="">{item.model}</td>
    <td className="">{item.material}</td>
    <td className="">{item.chain}</td>
    <td className="">{item.intention}</td>
    </tr>
    </table>
    <div>
    <p>Precio unitario</p>
    <strong>{`$ ${item.price}`}</strong>
    </div>

    <button>Editar compra</button>

    </div>

                        </div>)
                    })
                }
            </div>

            <div className="shoping-cart-button-container">
                <hr />
                <div className="shoping-cart-button-price-container">
                    <p>Total estimado</p>
                    <p>${totalPrice()}</p>

                </div>
                <ButtonWide onClick={linkToCheckOut} buttonText="CONTINUAR AL CHECKOUT"/>
                <div className="auxiliar-button-container">
                <ButtonWide onClick={togleMenu} buttonText="SEGUIR COMPRANDO"/>
                </div>

                <div className="shoping-cart-button-help-container">
                    <strong>Necesitas ayuda?</strong>
                    <p>Ver más</p>

                </div>
                <hr />
            </div>

        </div>
    )
}