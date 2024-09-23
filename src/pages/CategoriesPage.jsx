import bMw from "../assets/images/1cf0782f26b98c33c8797aedd943a899_1-removebg-preview 1.svg";
import nissan from "../assets/images/94d364aa1cf469bfed1fdb50179a119b-removebg-preview 1.svg";
import Gr from "../assets/images/5d1971197bd2ae2e2ea51d98c048238a_1-removebg-preview 1.svg";
import press from "../assets/images/icons8-круглое-меню-50 2.svg";
import { Link } from "react-router-dom";



function CategoriesPage() {
    return(     
    <section class="header">
        <div class="container header-row">
            <span class="btn-category">
                <img src={press} alt="press"/>
            </span>
         <div class="title">Модели</div>
        </div>
            <div class="mobile-block">
                <div class="container">
                    <div class="category-row">
                        <Link to="/post" class="category-item">
                            <img src={bMw} alt="bmW" class="category-item__img" />
                            <span class="category-item__title">Alpina</span>
                        </Link>
                        <Link to="/category/posts" class="category-item">
                            <img src={nissan} alt="nissan" class="category-item__img" />
                            <span class="category-item__title">Nismo</span>
                        </Link>
                        <Link to="/category/posts" class="category-item">
                            <img src={Gr} alt="toyta" class="category-item__img" />
                            <span class="category-item__title">GR</span>
                        </Link>
                    </div>
                </div>
            </div>
    </section>
    );
}

export default CategoriesPage;