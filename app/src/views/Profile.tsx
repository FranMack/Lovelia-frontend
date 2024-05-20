import { Button } from "../commons/Button"
const sections=["Datos de la cuenta","Historial de compras","Carrito de compras"]

export function Profile(){



    return(
        <section className="profile-container">

            <div className="profile-top-container">
                <ul>
            {sections.map((item,i)=>{
                return (
                    <li className="" key={i}>{item}</li>
                )
            })}
            </ul>

            </div>
            <div className="profile-botton-container">
                <div className="profile-botton-internal-left-container">
                    
                </div>
                <div className="profile-botton-internal-right-container">

                    <h4>Mi Talismán Digital</h4>
                    <div className="profile-botton-image-container"></div>
                    <div className="auxiliar-button-container">

                <Button text="Ir a talisman digital"/>
                    </div>
                </div>

            </div>
            


        </section>
    )
}