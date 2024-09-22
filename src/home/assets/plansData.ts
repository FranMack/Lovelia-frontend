
export interface PlanOptions{
title:string,
items:string[],
price:number,
color:string,
backgroundColor:string,
id:string,
}

export const plans:PlanOptions[]=[
    {title:"Baja de peso sin culpa ni restricciones",
        items:["Cómo lograr un descenso de peso exitoso : conseguirás un déficit calórico saludable para perder peso sin efecto rebote.",
         "Manejar las emociones y la alimentación evitando la culpa y la frustración."   
        ],
        price:15000,
        color:"#677e28",
        backgroundColor:"#d5e7cc",id:"1"
       
    },
    {title:"Alimentación y rendimiento deportivo",
        items:["Aprende como aumentar tus músculos de manera saludable",
"Guía para mejorar tu rendimiento deportivo cada día",
"Alimentación y entrenamiento según tu cuerpo"   
        ],
        price:15000,
        color:"#ae5e2d",
        backgroundColor:"#dcdecc",id:"2"
       
    },
    {title:"Cómo crear buenos hábitos alimenticios",
        items:[
            "Guía para comenzar a modificar nuestros hábitos y establecer prioridades",
"Sostener nuestros hábitos saludables en viajes y vacaciones",
"Cómo disfrutar de los eventos sociales y fiestas sin limitaciones"  
        ],
        price:15000,
        color:"#178781",
        backgroundColor:"#bedfdd",id:"3"
       
    },
    {title:"Alimentación en pre y post menopausia",
        items:["Guía para una alimentación saludable en pre y post menopausia.",
            "Guía hormonal y prevención de síntomas según cada grupo de alimentos",
           " Alcanza un déficit calórico saludable para potenciar la pérdida de grasa"
        ],
        price:15000,
        color:"#7d5aa4",
        backgroundColor:"#d3d9e5",id:"4"
       
    },
   
]

