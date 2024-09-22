

export const subtitles = [
    { start: 0, end: 5, text: "" },
    { start: 5, end: 9, text: "Nos sentamos comodos en una silla" },
    { start: 9, end: 15, text: "en un espacio con luz natural o artificial" },
    { start: 15, end: 18, text: "con la espalda recta" },
    { start: 18, end: 23, text: "con la cabeza alineada a nuestra columna" },
    { start: 23, end: 25, text: "como si tuvieramos un hilo " },
    { start: 25, end: 28, text: "que nos está tirando dede arriba" },
    { start: 28, end: 31, text: "" },
    { start: 31, end: 33, text: "cerramos los ojos" },
    { start: 33, end: 36, text: "" },
    { start: 36, end: 39, text: "las manos estan abiertas" },
  
  ];


  export function lineSubtitle (time:number){
    const line=subtitles.find((item)=>{
      if(time>=item.start && time<item.end){
        return item
      }

    })

    return line?.text
  }