
export function audioDurationTransform(time:number){

    let minutes=Math.floor(time/60)
    let seconds= Math.round(((time/60)-minutes)*60)

    const formatMinutes= minutes<10 ? `0${minutes}`:`${minutes}`
        const formatSeconds= seconds<10 ? `0${seconds}`:`${seconds}`


    return `${formatMinutes}:${formatSeconds}`

}