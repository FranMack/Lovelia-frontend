import { Button } from "../commons/Button"
import { BackgroundVideo } from "../commons/BackgroundVideo"
import { useContext, useEffect, useState } from "react"
import talismanAnalogico from "../assets/images/talisman-fisico.png"
import { ShopingCartContext } from "../context/modalShopingCart"
import { UserContext } from "../context/userContext"
import talismanDigital from "../assets/images/talisman-wallpaper.png"
import axios from "axios"

interface DatosCompra{
    producto:string,
    numPedido:string,
    fecha:string,
    precio:number,
    image:string [],
   

}

interface ShopingHistoryItem{
    id: string;
    name: string;
    model: string;
    material: string;
    rock: string;
    chain: string;
    price: number;
    quantity: number;
    date: string;
    user_id: string;
    order_id: string;
    payment_method: string;
    receiver: string;
    address: string;
    postalCode: string;
    phone:string
}

type ShopingHistory= ShopingHistoryItem[]





const sections=["Datos de la cuenta","Historial de compras"]




const datosCompras:DatosCompra[]=[
    {producto:"Talisman Aura",numPedido:"LA1545",fecha:"12/05/2024",precio:1000.00,image:[talismanAnalogico,talismanAnalogico,talismanAnalogico]},
    {producto:"Talisman Aura",numPedido:"LA1545",fecha:"12/05/2024",precio:1000.00,image:[talismanAnalogico]},
    {producto:"Talisman Aura",numPedido:"LA1545",fecha:"12/05/2024",precio:1000.00,image:[talismanAnalogico]},
    {producto:"Talisman Aura",numPedido:"LA1545",fecha:"12/05/2024",precio:1000.00,image:[talismanAnalogico]},
    {producto:"Talisman Aura",numPedido:"LA1545",fecha:"12/05/2024",precio:1000.00,image:[talismanAnalogico]}]

export function Profile(){

    const [buttonFocusPosition,setButttonFocusPosition]=useState("Datos de la cuenta")

    const handleButtonFocus=(buttonName:string)=>{
        setButttonFocusPosition(buttonName)
    }



    const{menuOpen}=useContext(ShopingCartContext)
    const{name,lastname,email,subscription,id}=useContext(UserContext)



    const [shopingHistory,setShopingHistory]=useState<ShopingHistory[]>([])
    const [index,setIndex]=useState<number>(0)


    const handleIndex=(index:number)=>{
        setIndex(index)
    }


    useEffect (()=>{
        if(email){
        axios.get(`http://localhost:3000/api/v1/product/list/${email}`,{withCredentials:true})
        .then((response)=>{setShopingHistory(response.data)})
        .catch((error)=>{
            console.log(error)
        })
    }
    },[email])



console.log("INDEX",index)
      
      return (
        <main className={menuOpen ? "viewport-background":"" } >
            <BackgroundVideo/>
        <section className="profile-container efectoReveal">

            <div className="profile-top-container">
                <ul>
            {sections.map((item,i)=>{
                return (
                    <li onClick={()=>handleButtonFocus(item)} className={buttonFocusPosition === item ? "button-focus-style":""} key={i}>{item}</li>
                )
            })}
            </ul>

            </div>
          { buttonFocusPosition==="Datos de la cuenta" && 
          <div className="profile-botton-container">
                <div className="profile-botton-internal-left-container">
                <div className="profile-item-info-container">
                      <h5>Nombre</h5>
                        <input type="text" value={name}/>
                        </div>
                        <div className="profile-item-info-container">
                      <h5>Apellido</h5>
                        <input type="text" value={lastname}/>
                        </div>
                        <div className="profile-item-info-container">
                      <h5>Correo electrónico</h5>
                        <input type="email" value={email}/>
                        </div>
                    <div className="profile-item-info-container">
                      <h5>Suscripción</h5>
                        <input type="text" value={subscription ? "Activa" :"Inactiva"}/>
                        </div>

                        <button>Modificar datos de perfil</button>
                    
                </div>
                <div className="profile-botton-internal-right-container">

                    <h4>Mi Talismán Digital</h4>
                    <div className="profile-botton-image-container">
                        {subscription ? <img className="profile-talismanDigital-image" src={talismanDigital} alt="talisman Digital" />
                        :<p>Aún no tienes un talismán digital</p>}
                    </div>
                    <div className="auxiliar-button-container">

                <Button text="Ir a talisman digital"/>
                    </div>
                </div>

            </div>}

            { buttonFocusPosition==="Historial de compras" && 
            
            <div className="profile-historial-container">


            {shopingHistory.length<=0 ? 
            <div className="profile-historial-container-noRegister">
                <h4>No se encuentran registros de compra</h4>
            </div>:
            
             <>
            <div className="profile-historial-internal-left-container">
                    {shopingHistory.length>0 && shopingHistory.map((item,i)=>{
                        return(
                            <div onClick={()=>handleIndex(i)} key={item[0].order_id} className="profile-historial-item-card">
                               
                               <div className="auxiliar">
                                <h4>Compra Nº{shopingHistory.length -i}</h4>
                                <p>{item[0].date}</p>
                                </div>
                                <p>{`Nº de pedido: ${item[0].order_id}`}</p>
                                {/*<p><span>Precio unitario</span></p>
                                <strong>{`$ ${item[0].unit_price}`}</strong>*/}
                              
                               
                                
                            </div>
                        )
                      
                    })}
                    
                    
                </div>





            <div className="profile-historial-internal-right-container">

<h4>Detalles de la compra</h4>
<div className="profile-historial-detalle-container">

    <div className="profile-historial-detalle-center-container">
    <p>{`Nro. pedido:${shopingHistory.length>0 && shopingHistory[index][0].order_id}`}</p>
    <p>{`Fecha:${ shopingHistory.length>0 && shopingHistory[index][0].date}`}</p>
    <hr />  
    <div  className="product-image-container">
    {datosCompras[0].image.map((item,i)=>{
        return(
        <img key={i} src={item} alt={`$Producto ${i+1}`} />
    )
})}
</div>
    
    <hr />
    <table>
        <tr>
    <th className="table-title">Producto <span>{`(Material - Piedra - Colgado )`}</span></th>
    <th className="table-title">Precio</th>
    </tr>
    {shopingHistory.length>0 && shopingHistory[index].map((item)=>{

        return(
            <tr>
    <td>{`${item.name} ${item.model} (${item.material}-${item.rock}-${item.chain})`}</td>
    <td>{`$ ${item.price}`}</td>
    </tr>
        )
    })}

    <tr>
    <td>TOTAL</td>
    <td>$ {shopingHistory.length>0 && shopingHistory[0].reduce((a,b)=>{return a + b.price},0)}</td>
    </tr>
    
    </table>
    <hr />

    <div className="envio-info-container">
        <div className="envio-info-auxiliar-container">
            <h5>Dirección de envío</h5>
            <p>{shopingHistory.length>0 && shopingHistory[index][0].address}</p>
            <p>{shopingHistory.length>0 && shopingHistory[index][0].postalCode}</p>
            <p>{shopingHistory.length>0 && shopingHistory[index][0].receiver}</p>
            <p>{shopingHistory[index][0].phone}</p>
            
            
        </div>
        <div className="envio-info-auxiliar-container">
            <h5>Método de pago</h5>
            <p>{shopingHistory.length>0 && shopingHistory[index][0].payment_method}</p>
        </div>
    </div>
    </div>

   
    
  
</div>

</div>

</> }

           
                </div>
                
                
                }
            


        </section>
        </main>
    )
}