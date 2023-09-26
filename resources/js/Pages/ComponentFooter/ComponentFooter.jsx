import "./ComponentFooter.scss";
import img_1 from "./img-1.png";
import img_2 from "./img-2.png";
import vk from "./vk-icon.png";
export const ComponentFooter = () => {
    return (
        <footer>
            <div className="Footer">
                <ul className="Footer__location">
                    <li className="Footer__location-item">
                        <img className="img-1" src={img_1} alt="" />
                        <div className="Footer__item-text">
                            <p className="item-office">Офис в Таганроге</p>
                            <p className="item-address ">
                                ул. Петровская, 89Б, ТЦ «Андреевский»
                            </p>
                        </div>
                    </li>
                    <li className="Footer__location-item">
                        <img className="img-2" src={img_2} alt="" />
                        <div className="Footer__item-text">
                            <p className="item-office">
                                Офис в Ростове-на-Дону
                            </p>
                            <p className="item-address ">
                                ул. Нижнебульварная, 6, БЦ «5 морей»
                            </p>
                        </div>
                    </li>
                </ul>
                <ul className="Footer__about">
                    <a
                        href="http://localhost/Oggylib/public/login"
                        className="Footer__number Footer__item"
                    >
                        +7 495 587-41-27
                    </a>
                    <a
                        href="http://localhost/Oggylib/public/login"
                        className="Footer__mail Footer__item"
                    >
                        hello@ogettoweb.com
                    </a>
                    <a
                        href="http://localhost/Oggylib/public/login"
                        className="Footer__social Footer__item"
                    >
                        <img src={vk} alt="" />
                    </a>
                </ul>
            </div>
        </footer>
    );
};
export default ComponentFooter;
