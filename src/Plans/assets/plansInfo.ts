import image1 from "../assets/plan-image1.png";
import image2 from "../assets/plan-image2.png";
import image3 from "../assets/plan-image3.png";
import image4 from "../assets/plan-image4.png";


interface PlanInfo{
    image:string,
    title:string,
    price:number,
    paragraph:string
    consultPrice:number
}

export const plans:PlanInfo[]=[
    {title:"Baja de peso sin culpa ni restricciones",price:15000,consultPrice:1000,
    paragraph:"Conseguirás un descenso de peso exitoso con un déficit calórico saludable y sin tener efecto rebote. Donde trabajaremos las emociones para evitar la culpa y la frustración, reforzando la autoestima y la confianza.",image:image1},
    {title:"Alimentación y rendimiento deportivo",price:15000,consultPrice:1000,
        paragraph:"Lograremos mejorar tu masa muscular de manera saludable, trabajando tus requerimientos según tu tipo de entrenamiento y composición corporal para llegar al 100% de tu potencial.",image:image2},
        {title:"Cómo crear buenos hábitos alimenticios",price:15000,consultPrice:1000,
            paragraph:"Aprenderás a modificar los hábitos negativos, establecer prioridades para disfrutar de viajes, vacaciones, eventos y fiestas, logrando que los hábitos saludables te acompañen para siempre.",image:image3},
            {title:"Alimentación en pre y post menopausia",price:15000,consultPrice:1000,
                paragraph:"Conseguirás equilibrar tus hormonas con una alimentación saludable y adaptada a cada etapa en donde potenciaremos la pérdida de grasa con un déficit calórico conveniente y minimizando los síntomas asociados.",image:image4},

]