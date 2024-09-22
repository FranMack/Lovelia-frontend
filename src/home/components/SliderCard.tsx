export interface PlanOptions{
    title:string,
    items:string[],
    price:number,
    color:string,
    backgroundColor:string,
    id:string,
    linkTo: (path: string) => void;
    }

export function SliderCard({id,title,items,price,backgroundColor,color,linkTo}:PlanOptions){

    return(
        <div className="slider-card-container">
        <div key={title} className='slider-card-internal-container' style={{backgroundColor:backgroundColor}}>
        <h4 style={{color:color}}>
          {title}
        </h4>
        <ul style={{color:color}}>{items.map((item)=>{
          return(<li>{item}</li>)
        })}</ul>
        <h5 style={{color:color}}>{`$${price}`}</h5>
        <div className='buttons-container'>
        <button onClick={()=>{linkTo(id)}} style={{backgroundColor:color}}>Lo quiero</button>
 
        </div>
        </div>
      </div>
    );
}