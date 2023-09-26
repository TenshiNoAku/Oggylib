const dataAdmin = [
    {
        id: 1,
        name: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: " Мартин Фаулер",
        genre: "компьютерная литература",
        tags: "Программирование, Мартин Фаулер, Компьютерные технологии",
        raiting: "4.36",
    },
    {
        id: 1,
        name: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: " Мартин Фаулер",
        genre: "компьютерная литература",
        tags: "Программирование, Мартин Фаулер, Компьютерные технологии",
        raiting: "4.36",
    },
    {
        id: 1,
        name: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: " Мартин Фаулер",
        genre: "компьютерная литература",
        tags: "Программирование, Мартин Фаулер, Компьютерные технологии",
        raiting: "4.36",
    },
    {
        id: 1,
        name: "Рефакторинг. Улучшение проекта существующего кода. ",
        author: " Мартин Фаулер",
        genre: "компьютерная литература",
        tags: "Программирование, Мартин Фаулер, Компьютерные технологии",
        raiting: "4.36",
    },
];
import iconMore from "./icon-more.png";
import iconAdd from "./icon-add.png";
import React from "react";
import add from "./icon-add.png";
import "./ComponentAdminBooks.scss";
export const ComponentAdminBooks = () => {
    return (
        <div className="ComponentAdminUsers-wrapper">
            <caption className="main-text"> Книги</caption>
            <a className="table-add" href="#">
                <img src={iconAdd} alt="" />
            </a>
            <table>
                <thead>
                    <tr className="main-tr">
                        <th scope="col">ID</th>
                        <th scope="col">Название</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Жанр</th>
                        <th scope="col">Теги</th>
                        <th scope="col">Рейтинг</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAdmin.map((item, index) => (
                        <tr>
                            <td scope="row" data-label="Account">
                                {item.id}
                            </td>
                            <td data-label="Due Date">{item.name}</td>
                            <td data-label="Amount">{item.author}</td>
                            <td className="last-td" data-label="Period">
                                {item.genre}
                            </td>
                            <td data-label="Amount">{item.tags}</td>
                            <td className="last-td" data-label="Period">
                                {item.raiting}
                            </td>
                            <td className="td-more" data-label="Period">
                                <a href="#">
                                    <img src={iconMore} alt="" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ComponentAdminBooks;
