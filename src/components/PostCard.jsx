import Imagesphone from "../assets/images/вторая картинка.png";
import { Link } from "react-router-dom";

function PostCard(props) {
    return (
        <Link to="/categories" class="phone-text-container">
            <div class="name-second-container">
                    <div class="for-name-cars">
                </div>
                    <img src={Imagesphone} alt="phone"/>
            
                <div class="text-overlay">Car for Road</div>
                    <span class="two-photo">There are a lot of cars in our world, but the best ones are here</span>
                <span class="name-cars">SUBARU TOYOTA BMW NISSAN AUDI</span>
            </div>
        </Link>
    );
}

export default PostCard;