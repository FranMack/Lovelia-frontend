export function timerDurationTransform(time:number) {
    // Calcula las horas
    let hours = Math.floor(time / 3600);
    
    // Calcula los minutos, restando las horas en segundos del tiempo total y luego dividiendo entre 60
    let minutes = Math.floor((time % 3600) / 60);
    
    // Calcula los segundos restantes después de descontar horas y minutos
    let seconds = time % 60;
  
    // Formatea los minutos y segundos para que siempre tengan dos dígitos
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
    return `${hours}:${formatMinutes}:${formatSeconds}`;
  }