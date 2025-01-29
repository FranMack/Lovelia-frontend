import { ShopingCartItemOptions } from "../context"

export const numberOfProducts=(items:ShopingCartItemOptions[])=>{

    if(items.length<1){
        return null
    }

    return items.reduce((count,product)=>{return count +product.quantity},0)
}