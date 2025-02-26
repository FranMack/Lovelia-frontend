import { ShopingCartItemOptions } from "../../context";
export   function formatPrice(currency:string,price_AR:number,price_MX:number,price_RM:number){

    console.log({currency,price_AR,price_MX,price_RM})
    return currency==="Argentina"? `$ ${price_AR.toFixed(2)}` : currency==="Mexico"? `$ ${price_MX.toFixed(2)}`:`$ ${price_RM.toFixed(2)}`

  }


 export  const totalPrice = (currency:string,shopingCartItems:ShopingCartItemOptions[]) => {
    const priceKey = currency === 'Argentina' ? 'price_AR' 
                   : currency === 'Mexico' ? 'price_MX' 
                   : 'price_RM';
  
    return shopingCartItems.reduce((acc, item) => acc + item[priceKey] * item.quantity, 0);
  };