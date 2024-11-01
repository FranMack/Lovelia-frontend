import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileMenuContext } from "../../context";

interface ItemsOptions {
  title: string;
  path: string;
}

export interface DropdownOptions {
  title: string;
  path:string;
  items: ItemsOptions[];
}

export const DropDownMobileMenu = ({ title, items,path }: DropdownOptions) => {
  const navigate = useNavigate();

  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const handleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const{toggleMenu}=useContext(MobileMenuContext)
  const linkTo = (path: string) => {
    
    if(path){
        navigate(path);
        toggleMenu()
    }
   
  };

  return (
    <div className="dropDown-mobile-menu-card-container">
      <div className="dropDown-mobile-menu-card-title-container">
        <p onClick={()=>{linkTo(path);handleDropDown()}}>{title}</p>
      
      </div>
      {dropDownOpen && (
        <div className="dropDown-mobile-menu-card-items-container dropDown-Reveal">
          {items.map((item,i) => {
            return (
              <p
              key={i}
                onClick={() => {
                  linkTo(item.path);
                  handleDropDown();
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
