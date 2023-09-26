import React, { useState } from "react";
import "./ComponentHeader.scss";
import Profile from "./Profile.svg";
import notification from "./notification.svg";
import likes from "./likes.svg";
import search from "./Search.svg";
import burger from "./burger.svg";
export const ComponentHeader = () => {
    const [activePage, setActivePage] = useState("");
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const handlePageClick = (page) => {
        setActivePage(page);
    };
    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };
    return (
        <header className={`header__wrapper `}>
            <div className="header__logo">
                <img
                    width={235}
                    height={57}
                    src="./img/logo.svg"
                    alt="Логотип"
                />
            </div>
            <ul
                className={`header__pages pages ${
                    isBurgerMenuOpen ? "activeBurger" : ""
                }`}
            >
                <li
                    className={`header__page ${
                        activePage === "main" ? "active" : ""
                    }`}
                >
                    <a
                        href="#"
                        className="page-text"
                        onClick={() => handlePageClick("main")}
                    >
                        главная
                    </a>
                </li>
                <li
                    className={`header__page ${
                        activePage === "books" ? "active" : ""
                    }`}
                >
                    <a
                        href="#"
                        className="page-text"
                        onClick={() => handlePageClick("books")}
                    >
                        мои книги
                    </a>
                </li>
                <li
                    className={`header__page ${
                        activePage === "journal" ? "active" : ""
                    }`}
                >
                    <a
                        href="#"
                        className="page-text"
                        onClick={() => handlePageClick("journal")}
                    >
                        журнал
                    </a>
                </li>
            </ul>
            <ul className="header__items">
                <li className="header-item">
                    <a href="#">
                        <img className="header-img" src={search} alt="" />
                    </a>
                </li>
                <li className="header-item">
                    <a href="#">
                        <img className="header-img" src={likes} alt="" />
                    </a>
                </li>
                <li className="header-item">
                    <a href="#">
                        <img className="header-img" src={notification} alt="" />
                    </a>
                </li>
                <li className="header-item">
                    <a href="#">
                        <img className="header-img" src={Profile} alt="" />
                    </a>
                </li>
            </ul>
            <img
                className="burger-icon"
                onClick={toggleBurgerMenu}
                src={burger}
                alt=""
            />

            {isBurgerMenuOpen ? (
                <div onClick={toggleBurgerMenu} className="cross"></div>
            ) : (
                ""
            )}
        </header>
    );
};

export default ComponentHeader;
