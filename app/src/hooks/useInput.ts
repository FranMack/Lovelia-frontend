import { useState } from "react";

export function useInput(){

const [value,setValue]=useState("");
const onChange=(event:React.ChangeEvent<HTMLInputElement> | null)=>{
    if(event){
        setValue(event.target.value)
    }
    else{
        setValue("")
    }
    
}

return { value, onChange };
    
}