const dataAdmin = [
    {
        number: 1,
        user: "Петров Пётр",
        date: " 23.04.2023",
        book: "Рефакторинг. Улучшение проекта существующего кода. ",
    },
    {
        number: 1,
        user: "Петров Пётр",
        date: " 23.04.2023",
        book: "Рефакторинг. Улучшение проекта существующего кода. ",
    },
    {
        number: 1,
        user: "Петров Пётр",
        date: " 23.04.2023",
        book: "Рефакторинг. Улучшение проекта существующего кода. ",
    },
    {
        number: 1,
        user: "Петров Пётр",
        date: " 23.04.2023",
        book: "Рефакторинг. Улучшение проекта существующего кода. ",
    },
];
import iconMore from "./icon-more.png";
import iconAdd from "./icon-add.png";
import React from "react";
import add from "./icon-add.png";
import "./ComponentAdminRequests.scss";
export const ComponentAdminRequests = () => {
    return (
        <div className="ComponentAdminUsers-wrapper">
            <caption className="main-text"> Запросы</caption>
            <a className="table-add" href="#">
                <img src={iconAdd} alt="" />
            </a>
            <table>
                <thead>
                    <tr className="main-tr">
                        <th scope="col">№</th>
                        <th scope="col">Пользователь</th>
                        <th scope="col">Дата бронирования</th>
                        <th scope="col">Книга</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAdmin.map((item, index) => (
                        <tr>
                            <td scope="row" data-label="Account">
                                {item.number}
                            </td>
                            <td data-label="Due Date">{item.user}</td>
                            <td data-label="Amount">{item.date}</td>
                            <td className="last-td" data-label="Period">
                                {item.book}
                            </td>

                            <td className="td-more" data-label="Period  ">
                                <a className="td-more-accept" href="#">
                                    Продлить
                                </a>
                                <a className="td-more-close" href="#">
                                    Отколнить{" "}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ComponentAdminRequests;
