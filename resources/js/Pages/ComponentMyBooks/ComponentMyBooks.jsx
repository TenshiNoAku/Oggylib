import React, { useState } from "react";

const data = [
    {
        id: 1,
        img: "https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg",
        title: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: "Мартин Фаулер",
        score: 4.36,
        description:
            "Программирование привлекает множество людей своими большими возможностями в создании и распространении собственных программ и приложений. В то же время это привело к появлению большого числа плохо спроектированных программ, развитие которых трудно поддерживать из-за неудобочитаемого кода и плохой архитектуры. Мартин Фаулер описывает процесс рефакторинга, приводит замечания и показывает, где чаще всего...",
        status: "read",
    },
    {
        id: 1,
        img: "https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg",
        title: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: "Мартин Фаулер",
        score: 4.36,
        description:
            "Программирование привлекает множество людей своими большими возможностями в создании и распространении собственных программ и приложений. В то же время это привело к появлению большого числа плохо спроектированных программ, развитие которых трудно поддерживать из-за неудобочитаемого кода и плохой архитектуры. Мартин Фаулер описывает процесс рефакторинга, приводит замечания и показывает, где чаще всего...",
        status: "read",
    },
    {
        id: 1,
        img: "https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg",
        title: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: "Мартин Фаулер",
        score: 4.36,
        description:
            "Программирование привлекает множество людей своими большими возможностями в создании и распространении собственных программ и приложений. В то же время это привело к появлению большого числа плохо спроектированных программ, развитие которых трудно поддерживать из-за неудобочитаемого кода и плохой архитектуры. Мартин Фаулер описывает процесс рефакторинга, приводит замечания и показывает, где чаще всего...",
        status: "read",
    },
    {
        id: 1,
        img: "https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg",
        title: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: "Мартин Фаулер",
        score: 4.36,
        description:
            "Программирование привлекает множество людей своими большими возможностями в создании и распространении собственных программ и приложений. В то же время это привело к появлению большого числа плохо спроектированных программ, развитие которых трудно поддерживать из-за неудобочитаемого кода и плохой архитектуры. Мартин Фаулер описывает процесс рефакторинга, приводит замечания и показывает, где чаще всего...",
        status: "read",
    },
    {
        id: 1,
        img: "https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg",
        title: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: "Мартин Фаулер",
        score: 4.36,
        description:
            "Программирование привлекает множество людей своими большими возможностями в создании и распространении собственных программ и приложений. В то же время это привело к появлению большого числа плохо спроектированных программ, развитие которых трудно поддерживать из-за неудобочитаемого кода и плохой архитектуры. Мартин Фаулер описывает процесс рефакторинга, приводит замечания и показывает, где чаще всего...",
        status: "read",
    },
];

import "./ComponentMyBooks.scss";
import ComponentBook from "../ComponentBook/ComponentBook";
export const ComponentMyBooks = () => {
    const [activeFilter, setActiveFilter] = useState("");
    const handleFilterClick = (Filter) => {
        setActiveFilter(Filter);
    };
    return (
        <div className="MyBooks__wrapper">
            <ul className="MyBooks__menu">
                <li
                    className={`MyBooks__menu-item ${
                        activeFilter === "all" ? "active" : ""
                    }`}
                >
                    <a onClick={() => handleFilterClick("all")} href="#">
                        все
                    </a>
                </li>
                <li
                    className={`MyBooks__menu-item ${
                        activeFilter === "reading" ? "active" : ""
                    }`}
                >
                    <a onClick={() => handleFilterClick("reading")} href="#">
                        читаю
                    </a>
                </li>

                <li
                    className={`MyBooks__menu-item ${
                        activeFilter === "read" ? "active" : ""
                    }`}
                >
                    <a onClick={() => handleFilterClick("read")} href="#">
                        прочитано
                    </a>
                </li>
                <li
                    className={`MyBooks__menu-item ${
                        activeFilter === "postponed" ? "active" : ""
                    }`}
                >
                    <a onClick={() => handleFilterClick("postponed")} href="#">
                        отложено
                    </a>
                </li>
                <li
                    className={`MyBooks__menu-item ${
                        activeFilter === "booked" ? "active" : ""
                    }`}
                >
                    <a onClick={() => handleFilterClick("booked")} href="#">
                        забронировано
                    </a>
                </li>
            </ul>
            <div className="MyBooks__content">
                {data.map((elem, index) => (
                    <ComponentBook
                        key={index}
                        id={elem.id}
                        img={elem.img}
                        title={elem.title}
                        author={elem.author}
                        score={elem.score}
                        description={elem.description}
                        status={elem.status}
                    />
                ))}
            </div>
        </div>
    );
};
export default ComponentMyBooks;
