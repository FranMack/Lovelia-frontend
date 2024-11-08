
import { constellationCollection } from "../assets/talismanBoxInfo"

interface ConstellationOptions{
  constellation:string
}

export const ConstelationBox = ({constellation}:ConstellationOptions) => {



  const filterConstellation = (constellation: string) => {
    const userConstellation = constellationCollection.find((item) => item.constellation === constellation);
    return userConstellation?.path || ""; // Return an empty string if not found
  };


  return (
    <div className='constelationBox-container'>
   { filterConstellation(constellation) && <img src={filterConstellation(constellation)} alt="constelacion" />}
    </div>
  )
}
