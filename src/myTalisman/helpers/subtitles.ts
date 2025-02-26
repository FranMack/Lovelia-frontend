
export const subtitles = [
  { start: 0, end: 2, text: "Siente cómo el movimiento" },
  { start: 2, end: 6, text: "y el sonido de tu talismán te envuelven" },
  { start: 6, end: 9, text: "generando una emoción única" },
  { start: 9, end: 13, text: "Permítete observar tu respiración" },
  { start: 18, end: 20, text: "mientras cada inhalación y exhalación" },
  { start: 21, end: 24, text: "te llevan a un estado de calma" },
  { start: 26, end: 31, text: "Relaja todos y cada uno de los músculos de tu cuerpo" },
  { start: 35, end: 40, text: "Siente cómo el aire entra y sale suavemente por tu nariz" },
  { start: 44, end: 46, text: "con cada inhalación" },
  { start: 46, end: 50, text: "te acercas más y más a tu centro" },
  { start: 50, end: 54, text: "a lo más profundo de tu ser" },
  { start: 58, end: 61, text: "Imagina llegar a ese lugar seguro" },
  { start: 62, end: 65, text: "un espacio dentro de ti" },
  { start: 65, end: 69, text: "donde existen todas las posibilidades" },
  { start: 73, end: 76, text: "Aquí encuentras todos los recursos" },
  { start: 76, end: 80, text: "que necesitas en este momento" },
  { start: 83, end: 85, text: "Este es tu refugio" },
  { start: 86, end: 88, text: "tu punto de conexión" },
  { start: 88, end: 92, text: "al que puedes regresar siempre que lo desees" },
  { start: 95, end: 99, text: "Ahora, conecta con tu intención" },
  { start: 102, end: 106, text: "Visualiza la situación que deseas crear" },
  { start: 106, end: 108, text: "observa los detalles" },
  { start: 109, end: 112, text: "siente la emoción en tu cuerpo" },
  { start: 112, end: 117, text: "percibe cómo tu energía fluye hacia ese estado deseado" },
  { start: 119, end: 122, text: "Permítete habitar ese lugar" },
  { start: 122, end: 125, text: "en completa armonía con tu ser" },
];



  export function lineSubtitle (time:number){
    const line=subtitles.find((item)=>{
      if(time>=item.start && time<item.end){
        return item
      }

    })

    return line?.text
  }