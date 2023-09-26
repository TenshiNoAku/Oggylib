import React from "react";
import { useState, useEffect } from "react";
import "./ComponentMain.scss";
import settingsimg from "./Tune.png";
import dataBook from "./dataBook.js";
const tags = [
    "Архитектура информационных систем",
    "Искусство программирования",
    "Роберт Мартин",
    "Разработка программного обеспечения",
];
const ComponentMain = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(21);

    useEffect(() => {
        const getBooks = async () => {
            // Не отработанный запрос
            setLoading(true); // Не отработанный запрос
            const response = await axios.get(""); // Не отработанный запрос
            setLoading(false); // Не отработанный запрос
        };
        setBooks(dataBook); // Получение локальных данных
    }, []);

    const [settings, setSettings] = useState();
    const [genresVisible, setGenresVisible] = useState(false);
    const [tagsVisible, setTagsVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <div className="ComponentMain">
            <div className="Main__filter">
                <a
                    href="#"
                    onClick={() => {
                        setVisible(!visible);
                    }}
                    className="filter__visible"
                >
                    <img src={settingsimg} alt="" />
                </a>
                <div className="filter-settings">
                    {visible ? (
                        <ul className="filter-content">
                            <div className="filter-content_items">
                                <a
                                    onClick={() => {
                                        setGenresVisible(!genresVisible);
                                    }}
                                    className="filter-content_item item_1"
                                    href="#"
                                >
                                    <h5 className="">Жанры</h5>
                                </a>
                                <a
                                    onClick={() => {
                                        setTagsVisible(!tagsVisible);
                                    }}
                                    className="filter-content_item item_2"
                                    href="#"
                                >
                                    <h5 className="">Теги</h5>
                                </a>
                            </div>
                            <div className="filter-more">
                                {genresVisible ? (
                                    <form className="filter-genres">
                                        <form className="filter-genres">
                                            {tags.map((tag, id) => (
                                                <div
                                                    className="genres-item filter-more_item"
                                                    key={id}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={`vehicle${id}`}
                                                        name={`vehicle${id}`}
                                                        value={tag}
                                                    />
                                                    <label
                                                        htmlFor={`vehicle${id}`}
                                                    >
                                                        {tag}
                                                    </label>
                                                </div>
                                            ))}
                                        </form>
                                    </form>
                                ) : (
                                    ""
                                )}
                                {tagsVisible ? (
                                    <form className="filter-genres">
                                        <form className="filter-genres">
                                            {tags.map((tag, id) => (
                                                <div
                                                    className="filter-more_item filter-more_item"
                                                    key={id}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={`vehicle${id}`}
                                                        name={`vehicle${id}`}
                                                        value={tag}
                                                    />
                                                    <label
                                                        htmlFor={`vehicle${id}`}
                                                    >
                                                        {tag}
                                                    </label>
                                                </div>
                                            ))}
                                        </form>
                                    </form>
                                ) : (
                                    ""
                                )}
                            </div>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            <ul className="ComponentMainBooks">
                {books.map((book, id) => (
                    <a href="#" key={id}>
                        <div className="MainBook">
                            <img
                                className="MainBook__img"
                                src={book.img}
                                alt=""
                            />
                            <h4 className="MainBook__title">{book.title}</h4>
                            <h5 className="MainBook__author">{book.author}</h5>
                        </div>
                    </a>
                ))}
            </ul>
        </div>
    );
};
export default ComponentMain;
