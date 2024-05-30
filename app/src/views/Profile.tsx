import { Button } from "../commons/Button"
import { BackgroundVideo } from "../commons/BackgroundVideo"
import { useContext, useState } from "react"
import talismanAnalogico from "../assets/images/talisman-fisico.png"
import { ShopingCartContext } from "../context/modalShopingCart"

interface DatosCompra{
    producto:string,
    numPedido:string,
    fecha:string,
    precio:number,
    image:string [],
   

}
const sections=["Datos de la cuenta","Historial de compras","Carrito de compras"]

const datosUsuarios={
    usuario: "AmparoB",
    nombre: "Amparo",
    apellido: "Bernave",
    email: "amparo@gmail.com",
    direccion:"Argentina, CABA, Av. San José 345, piso 6, apto 65.",
    telefono:"+54 01182492273",
    codigoPostal:2365,
    formaDePago:"Mercado Pago"
}


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
                      <h5>Usuario</h5>
                        <input type="text" value={datosUsuarios.usuario}/>
                        </div>
                        <div className="profile-item-info-container">
                      <h5>Nombre y apellido</h5>
                        <input type="text" value={`${datosUsuarios.nombre} ${datosUsuarios.apellido}`}/>
                        </div>
                        <div className="profile-item-info-container">
                      <h5>Correo electrónico</h5>
                        <input type="email" value={datosUsuarios.email}/>
                        </div>
                    <div className="profile-item-info-container">
                      <h5>Contraseña</h5>
                        <input type="password" value="123456"/>
                        </div>

                        <button>Modificar datos de perfil</button>
                    
                </div>
                <div className="profile-botton-internal-right-container">

                    <h4>Mi Talismán Digital</h4>
                    <div className="profile-botton-image-container">
                        <p>Aún no tienes un talismán digital</p>
                    </div>
                    <div className="auxiliar-button-container">

                <Button text="Ir a talisman digital"/>
                    </div>
                </div>

            </div>}

            { buttonFocusPosition==="Historial de compras" && <div className="profile-historial-container">


            <div className="profile-historial-internal-left-container">
                    {datosCompras.map((item)=>{
                        return(
                            <div key={item.numPedido} className="profile-historial-item-card">
                               
                               <div className="auxiliar">
                                <h4>{item.producto}</h4>
                                <p>{item.fecha}</p>
                                </div>
                                <p>{`Nº de pedido: ${item.numPedido}`}</p>
                                <p><span>Precio unitario</span></p>
                                <strong>{`$ ${item.precio}`}</strong>
                              
                               
                                
                            </div>
                        )
                      
                    })}
                    
                    
                </div>





            <div className="profile-historial-internal-right-container">

<h4>Detalles de la compra</h4>
<div className="profile-historial-detalle-container">

    <div className="profile-historial-detalle-center-container">
    <p>{`Nro. pedido:${datosCompras[0].numPedido}`}</p>
    <p>{`Fecha:${datosCompras[0].fecha}`}</p>
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
    <th className="table-title">Producto</th>
    <th className="table-title">Precio</th>
    </tr>
    {/*mapeo ===>*/}
    <tr>
    <td>{datosCompras[0].producto}</td>
    <td>{`$ ${datosCompras[0].precio}`}</td>
    </tr>
    <tr>
    <td>{datosCompras[0].producto}</td>
    <td>{`$ ${datosCompras[0].precio}`}</td>
    </tr>
    <tr>
    <td>{datosCompras[0].producto}</td>
    <td>{`$ ${datosCompras[0].precio}`}</td>
    </tr>
    <tr>
    <td>TOTAL</td>
    <td>$ 4000</td>
    </tr>
    
    </table>
    <hr />

    <div className="envio-info-container">
        <div className="envio-info-auxiliar-container">
            <h5>Dirección de envío</h5>
            <p>{`${datosUsuarios.nombre} ${datosUsuarios.apellido}`}</p>
            <p>{datosUsuarios.direccion}</p>
            <p>{datosUsuarios.codigoPostal}</p>
            <p>{datosUsuarios.telefono}</p>
            <p>{datosUsuarios.email}</p>
            
        </div>
        <div className="envio-info-auxiliar-container">
            <h5>Método de pago</h5>
            <p>{datosUsuarios.formaDePago}</p>
        </div>
    </div>
    </div>

   
    
  
</div>

</div>

                
                </div>}
            


        </section>
        </main>
    )
}