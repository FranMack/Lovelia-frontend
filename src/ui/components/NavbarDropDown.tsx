import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { envs } from "../../config/envs";

// Define the NavbarDropDownOptions interface
interface NavbarDropDownOptions {
  buttonName: string;
  path: string;
}

// Define the NavbarDropDown props type
type NavbarDropDownProps = {
  buttonOptions: NavbarDropDownOptions[];
  handleMouseOver?: () => void;
  handleMouseLeave?: () => void;
};

export function NavbarDropDown({
  buttonOptions,
  handleMouseOver,
  handleMouseLeave,
}: NavbarDropDownProps) {
  const navigate = useNavigate();
  const { setEmail, setId, setName, setLastname,setSuscription,setToken } = useContext(UserContext);

  const linkTo = (linkPath: string) => {
    navigate(linkPath);
    return;
  };

  const handlerLogout = () => {
    axios
      .get(`${envs.API_DOMAIN}/api/v1/user/logout`, {
        withCredentials: true,
      })
      .then(() => {
        setEmail("");
        setId("");
        setName("");
        setLastname("");
        setSuscription(false)
        sessionStorage.removeItem("userInfo")
        setToken("")
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerLink = (linkPath: string) => {
    if (linkPath !== "logout") {
      linkTo(linkPath);
    } else {
      handlerLogout();
    }
  };

  return (
    <>
      <div
        className="dropDown-container"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <ul>
          {buttonOptions.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  handlerLink(item.path);
                }}
              >
                {item.buttonName}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
