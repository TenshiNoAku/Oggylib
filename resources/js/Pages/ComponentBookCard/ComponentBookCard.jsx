import qrcode from "./qrcode.svg";
import write from "./write.svg";
const dataBook = {
    id: 1,
    img: "https://static.insales-cdn.com/images/products/1/7547/145161595/44610772.jpg",
    title: "Чистая архитектура. Искусство разработки программного обеспечения",
    author: "Роберт Мартин ",
    score: 4.4,
    annotation: `Роберт Мартин дает прямые и лаконичные ответы на ключевые вопросы архитектуры и дизайна. 'Чистую архитектуру" обязаны прочитать разработчики всех уровней, системные аналитики, архитекторы и каждый программист, который желает подняться по карьерной лестнице или хотя бы повлиять на людей, которые занимаются данной работой.Все архитектуры подчиняются одним и тем же правилам!Роберт Мартин (дядюшка Боб) `,
    state: "Прочитана",
    genre: "компьютерная литература",
    qrcode: "",
    status: "open",
    tags: [
        "Архитектура информационных систем",
        "Искусство программирования",
        "Роберт Мартин",
        "Разработка программного обеспечения",
    ],
    closeUser: "Пётр Петров",
};
import "./ComponentBookCard.scss";
import StarRating from "../components/widgets/StartRating/StarRating";
export const ComponentBookCard = () => {
    return (
        <div className="BookCard__wrapper">
            <div className="BookCard">
                <div className="BookCard__img">
                    <div className="BookCard-score">{dataBook.score}</div>
                    <img src={dataBook.img} className="img-book" alt="" />
                </div>
                <div className="BookCard__info">
                    <h1 className="BookCard__title">{dataBook.title}</h1>
                    <h4 className="BookCard__author">
                        Автор: {dataBook.author}
                    </h4>
                    <h5 className="BookCard__genre">Жанр: {dataBook.genre}</h5>
                    <div className="BookCard__state">
                        <div className="BookCard__state-info">
                            {dataBook.state}
                        </div>
                        <a href="#" className="BookCard__state-barcode">
                            <img src={qrcode} alt="" />
                        </a>
                        <a href="#" className="BookCard__state-write">
                            <img src={write} alt="" />
                        </a>
                    </div>
                    <div className="BookCard__rating">
                        <h6 className="BookCard__rating-text">Ваша оценка</h6>
                        <StarRating />
                    </div>
                    <div className="BookCard__status">
                        {dataBook.status == "close" ? (
                            <div className="BookCard__status-main">
                                <div className="status">
                                    Статус: Занята пользоателем{" "}
                                    {dataBook.closeUser}
                                </div>
                                <a
                                    href="#"
                                    className="Reservation Reservation-close"
                                >
                                    Бронирование невозможно
                                </a>
                            </div>
                        ) : dataBook.status == "open" ? (
                            <div className="BookCard__status-main">
                                <h4 className="status">Статус: Свободна</h4>
                                <a
                                    href="#"
                                    className="Reservation Reservation-open"
                                >
                                    Забронировать
                                </a>
                            </div>
                        ) : dataBook.status == "closeyour" ? (
                            <div className="BookCard__status-main">
                                <h4 className="status">Статус: Занята Вами</h4>
                                <a href="#" className="Reservation">
                                    Бронирование невозможно
                                </a>
                            </div>
                        ) : (
                            <div>нет статуса</div>
                        )}
                    </div>
                    <div className="BookCard__annotation">
                        <h2 className="BookCard__annotation-title">
                            Краткая аннотация
                        </h2>
                        <div className="BookCard__annotation-content">
                            {dataBook.annotation}
                        </div>
                    </div>
                    <div className="BookCard__tags">
                        {dataBook.tags.map((element) => (
                            <div className="tag-card">{element}</div>
                        ))}
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    );
};
export default ComponentBookCard;
