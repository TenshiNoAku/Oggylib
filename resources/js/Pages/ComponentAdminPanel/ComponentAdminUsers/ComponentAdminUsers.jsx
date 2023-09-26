const dataAdmin = [
    {
        id: 1,
        lastname: "Топчик",
        name: "Жека",
        mail: "VladimirPutinMolodec@gmail.com",
    },
    {
        id: 2,
        lastname: "Топчик",
        name: "Жека",
        mail: "VladimirPutinMolodec@gmail.com",
    },
    {
        id: 3,
        lastname: "Топчик",
        name: "Жека",
        mail: "VladimirPutinMolodec@gmail.com",
    },
    {
        id: 4,
        lastname: "Топчик",
        name: "Жека",
        mail: "VladimirPutinMolodec@gmail.com",
    },
];
import iconMore from "./icon-more.png";
import iconAdd from "./icon-add.png";
import React from "react";
import add from "./icon-add.png";
import "./ComponentAdminUsers.scss";
export const ComponentAdminUsers = () => {
    return (
        <div className="ComponentAdminUsers-wrapper">
            <caption className="main-text"> Пользователи</caption>
            <a className="table-add" href="#">
                <img src={iconAdd} alt="" />
            </a>
            <table>
                <thead>
                    <tr className="main-tr">
                        <th scope="col">ID</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Почта</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAdmin.map((item, index) => (
                        <tr>
                            <td scope="row" data-label="Account">
                                {item.id}
                            </td>
                            <td data-label="Due Date">{item.lastname}</td>
                            <td data-label="Amount">{item.name}</td>
                            <td className="last-td" data-label="Period">
                                {item.mail}
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
export default ComponentAdminUsers;
