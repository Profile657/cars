import categoryicon from "../assets/images/icons8-круглое-меню-50 2.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/categories" class="btn-category">
                    <img src={categoryicon} alt="press"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;