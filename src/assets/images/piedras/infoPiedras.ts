import piedra1 from "./piedra1.png";
import piedra2 from "./piedra2.png";
import piedra3 from "./piedra3.png";
import piedra4 from "./piedra4.png";
import piedra5 from "./piedra5.png";

interface piedrasOptions{
    name:string,
    description:string,
    image:string,
    className:string,
    dataIndex:string
}


export const infoPiedras:piedrasOptions[]=[
    {name:"PIEDRA 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",image:piedra1, className:"gallery-item-1", dataIndex:"1"},
    {name:"PIEDRA 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",image:piedra2, className:"gallery-item-2", dataIndex:"2"},
    {name:"PIEDRA 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",image:piedra3, className:"gallery-item-3", dataIndex:"3"},
    {name:"PIEDRA 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",image:piedra4, className:"gallery-item-4", dataIndex:"4"},
    {name:"PIEDRA 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",image:piedra5, className:"gallery-item-5", dataIndex:"5"},
   
]