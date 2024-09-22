

interface PlansOpgions{
    "¿Cuál es tu edad?": "20-30 años" | string;
    "¿Perdiste peso y lo recuperaste varias veces?": "Si" | "No";
    "¿Te salteas varias comidas al día?": "Si" | "No";
    "¿Te cuesta organizarte a la hora de preparar las comidas?": "Si" | "No";
    "¿La mayoría de los días no sabes qué comer?": "Si" | "No";
    "¿Haces actividad física más de 3 veces por semana?": "Si" | "No";
    "¿Entrenas y te gustaría estar más marcada y fibrosa?": "Si" | "No";
    "¿Picoteas o comes por ansiedad entre comidas?": "Si" | "No";
    "¿Si una vez te “salis de la dieta” pierdes el control total de las comidas?": "Si" | "No";
    "¿Sentís que tenes grasa abdominal acumulada y te cuesta mucho bajarla?": "Si" | "No";
}



export function findYourPlan(plan:PlansOpgions){

    if(plan["¿Cuál es tu edad?"]==="+ 50 años"){
        return 4
    }

    if(plan["¿Perdiste peso y lo recuperaste varias veces?"]==="Si"){
        return 1
    }

    if(plan["¿Si una vez te “salis de la dieta” pierdes el control total de las comidas?"]==="No" && plan["¿Te salteas varias comidas al día?"]==="Si" &&plan["¿Te cuesta organizarte a la hora de preparar las comidas?"]==="Si" &&plan["¿La mayoría de los días no sabes qué comer?"]==="Si"){
        return 3
    }

    if(plan["¿Te salteas varias comidas al día?"]==="Si"){
        return 3
    }

    if(plan["¿Te cuesta organizarte a la hora de preparar las comidas?"]==="Si"){
        return 3
    }

    if(plan["¿La mayoría de los días no sabes qué comer?"]==="Si"){
        return 3
    }

    if(plan["¿Haces actividad física más de 3 veces por semana?"]==="Si"){
        return 2
    }
    if(plan["¿Entrenas y te gustaría estar más marcada y fibrosa?"]==="Si"){
        return 2
    }

    if(plan["¿Picoteas o comes por ansiedad entre comidas?"]==="Si"
        && plan["¿Perdiste peso y lo recuperaste varias veces?"]==="No"
          && plan["¿Haces actividad física más de 3 veces por semana?"]==="No"
        && plan["¿Entrenas y te gustaría estar más marcada y fibrosa?"]==="No"
    
    ){
        return 3
    }
    if(plan["¿Picoteas o comes por ansiedad entre comidas?"]==="Si"){
        return 1
    }

    if(plan["¿Si una vez te “salis de la dieta” pierdes el control total de las comidas?"]==="Si"){
        return 2
    }




  
    


    
   


}