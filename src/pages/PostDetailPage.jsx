import pressBack from "../assets/images/icons8-кнопка-назад-48 1.svg";
import Bmw3 from "../assets/images/Frame 5.png";


function PostDetailPage() {
    return (   
    <section class="mobile-block">
        <div class="container">
            <div class="back-button">
                <img src={pressBack} alt="Back-press" />
            </div>
            <center><p class="description">
                BMW M3 третьего поколения прославился в автоспорте в основном благодаря BMW M3 GTR Race. С самого начала отличительными чертами бескомпромиссного болида стали могучие расширители колесных арок и огромное заднее антикрыло.
            </p></center>
            <span class="autor">Источник: <strong class="light-success-text">bmw.ru</strong></span>
                <img src={Bmw3} alt="phone"
                width="414" height="736"></img>
        </div>
    </section>);
}

export default PostDetailPage;