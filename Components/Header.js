import {APP_LOGO} from "../constants";
import NavItems from "./NavItems";

const Header = () =>{
    return(
        <div className="header-div">
            <div className = "logo">
                <img className="logo-img" src={APP_LOGO} />
            </div>
            <NavItems />
        </div>
    );
};
export default Header;