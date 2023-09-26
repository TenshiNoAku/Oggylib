import React from "react";
import "./ComponentNotification.scss";
import status from "./status.svg";
//example data from the backend
const data = [
    {
        massage:
            "Срок бронирования книги “Мастер-класс. Совершенный код.” Стива Макконнела истекает 15.06. Не забудьте вернуть книгу или продлить её бронирование!",
        date: "10.06.2023",
        status: true,
    },
    {
        massage:
            "Книга “Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих” свободна. Забронируйте её первым!",
        date: "04.06.2023",
        status: true,
    },
    {
        massage:
            "Книга “Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих” свободна. Забронируйте её первым!",
        date: "04.06.2023",
        status: true,
    },
    {
        massage:
            "Книга “Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих” свободна. Забронируйте её первым!",
        date: "04.06.2023",
        status: true,
    },
    {
        massage:
            "Книга “Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих” свободна. Забронируйте её первым!",
        date: "04.06.2023",
        status: true,
    },
    {
        massage:
            "Книга “Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих” свободна. Забронируйте её первым!",
        date: "04.06.2023",
        status: true,
    },
];
export const ComponentNotification = () => {
    return (
        <div className="Notification">
            <h1 className="Notification__title">Уведомления</h1>
            <ul className="Notification__items">
                {data.map((elem, index) => (
                    <li className="Notification__item" key={index}>
                        <h3 className="Notification-text">{elem.massage}</h3>
                        <img className="Notification-img" src={status} alt="" />
                        <p className="Notification-date">{elem.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ComponentNotification;
