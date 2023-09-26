import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./ComponentAdminPanel.scss";
import users from "./img/img-1.png";
import book from "./img/img-2.png";
import booked from "./img/img-3.png";
import requests from "./img/img-4.png";
import { ComponentAdminUsers } from "./ComponentAdminUsers/ComponentAdminUsers";
import ComponentAdminBooks from "./ComponentAdminBooks/ComponentAdminBooks";
import ComponentAdminRequests from "./ComponentAdminRequests/ComponentAdminRequests";

export const ComponentAdminPanel = () => {
    const [activeItem, setActiveItem] = useState("");

    const handleItemClick = (item) => {
        setActiveItem(activeItem === item ? "" : item);
    };

    return (
        <div className="AdminPanel_wrapper">
            <section className="AdminPanel">
                <div className="AdminPanelMenu">
                    <ul className="AdminPanelMenu_items">
                        <li
                            className={`AdminPanelMenu-item AdminPanelMenu-main ${
                                activeItem === "users" ? "active" : ""
                            }`}
                            onClick={() => handleItemClick("users")}
                        >
                            <a className="AdminPanelMenu-item" href="#">
                                <img src={users} alt="" />
                                <a className="item-text">Пользователи</a>
                            </a>
                            {activeItem === "users" && (
                                <a className="active-text" href="#">
                                    <p className="item-text-all">Все</p>
                                </a>
                            )}
                        </li>
                        <li
                            className={`AdminPanelMenu-item AdminPanelMenu-main ${
                                activeItem === "books" ? "active" : ""
                            }`}
                            onClick={() => handleItemClick("books")}
                        >
                            {" "}
                            <a className="AdminPanelMenu-item" href="#">
                                <img src={book} alt="" />
                                <a className="item-text">Книги</a>
                            </a>
                            {activeItem === "books" && (
                                <a className="active-text" href="#">
                                    <p className="item-text-all">Все</p>
                                </a>
                            )}
                        </li>
                        <li
                            className={`AdminPanelMenu-item AdminPanelMenu-main ${
                                activeItem === "booked" ? "active" : ""
                            }`}
                            onClick={() => handleItemClick("booked")}
                        >
                            {" "}
                            <a className="AdminPanelMenu-item" href="#">
                                <img src={booked} alt="" />
                                <a className="item-text">Забронировано</a>
                            </a>
                            {activeItem === "booked" && (
                                <a className="active-text" href="#">
                                    <p className="item-text-all">Все</p>
                                </a>
                            )}
                        </li>
                        <li
                            className={`AdminPanelMenu-item AdminPanelMenu-main ${
                                activeItem === "requests" ? "active" : ""
                            }`}
                            onClick={() => handleItemClick("requests")}
                        >
                            {" "}
                            <a className="AdminPanelMenu-item" href="#">
                                <img src={requests} alt="" />
                                <a className="item-text">Запросы</a>
                            </a>
                            {activeItem === "requests" && (
                                <a className="active-text" href="#">
                                    <p className="item-text-all">Все</p>
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="AdminPanelContent">
                    {/* <ComponentAdminUsers /> */}
                    {/* <ComponentAdminBooks /> */}
                    <ComponentAdminRequests />
                </div>
            </section>
        </div>
    );
};

export default ComponentAdminPanel;
