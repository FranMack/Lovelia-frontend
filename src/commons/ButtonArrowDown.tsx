import { ArrowDown } from "../assets/images/icons/icons"
interface ButtonArrowDownOptions{
    title:string
}
export function ButtonArrowDown({title}:ButtonArrowDownOptions){

    return( <div className="button-arrowDown-container">
    <h6>{title}</h6>

    <div className="button-arrowDown--icon-container">
      <ArrowDown />
    </div>
  </div>)
}