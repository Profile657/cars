import pess from "../assets/images/icons8-круглое-меню-50 2.svg";
import Bmww from "../assets/images/1cf0782f26b98c33c8797aedd943a899_1-removebg-preview 1.svg";
import { Link } from "react-router-dom";


function PostByCategoryPage() {
    return(    
    <section class="header">
        <div class="container">
            <span class="btn-category">
                <img src={pess} alt="press"/>
            </span>
        </div>
        <div class="mobile-block">
            <div class="mobile-block_header is-weight">
            </div>
            <div class="all-news">
                <div class="news-card">
                    <div class="container">
                        <h1>test</h1>
                        <img src={Bmww} alt="BmW" />
                        <h3 class="news-card__title">M3 GTR  Легенда автоспорта </h3>
                    </div>
                </div>
                <div class="news-card">
                    <div class="container">
                        <div class="all-card">
                        <h3 class="news-card__title">M3 GTR  Легенда автоспорта </h3>
                        </div>
                    </div>
                </div>
                <div class="news-card">
                    <div class="container">
                        <h3 class="news-card__title">M3 GTR  Легенда автоспорта </h3>
                    </div>
                </div>
                <div class="news-card">
                    <div class="container">
                        <h3 class="news-card__title">M3 GTR  Легенда автоспорта </h3>
                    </div>
                </div>
                <div class="news-card">
                    <div class="container">
                        <h3 class="news-card__title">M3 GTR  Легенда автоспорта </h3>
                    </div>
                </div>
                <div class="news-card">
                    <div class="container">
                        <h3 class="news-card__title">M3 GTR  Легенда автоспорта </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default PostByCategoryPage;