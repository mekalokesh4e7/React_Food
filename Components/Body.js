//import { APP_LOGO } from "../constants";
import Reslist from "./ResturantData";
import RestaurantCards from "./ResturantCards";
const Body =()=>{
    return(
        <div className="resturantBody">
        {Reslist.map((resturant)=>(
            <RestaurantCards key={resturant.info.id} resdata={resturant} />
        ))}
    </div>
    );
};

export default Body;