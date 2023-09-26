import React from "react";
import { useState } from "react";
const Alljournal = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="Alljournal">
            <div className="partOfTable">
                {" "}
                <ul className="nameOfTable">
                    <li>название</li>
                    <li>автор</li>
                    <li>забронировано</li>
                    <li>дата выдачи</li>
                    <li>дата сдачи</li>
                    <li>статус</li>
                    <li>
                        <img src="/img/tableIcon2.svg"></img>
                    </li>
                </ul>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <a href="#" className="linkOfBook">
                                    Чистая архитектура
                                </a>
                            </td>
                            <td>Роберт Мартин</td>
                            <td>Петров Пётр</td>
                            <td>23.02.2023</td>
                            <td>23.03.2023</td>
                            <td>сдано</td>
                            <td
                                className="editTable"
                                id="edit"
                                style={{ position: "relative" }}
                            >
                                <img
                                    src="/img/tableIcon1.svg"
                                    onClick={() => setShowMenu(!showMenu)}
                                />
                                {showMenu && (
                                    <div
                                        className="menu"
                                        style={{
                                            position: "absolute",
                                            bottom: "-40px",
                                            right: 0,
                                        }}
                                    >
                                        <input type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">Cдано</label>
                                        <br />
                                        <input type="checkbox" id="checkbox2" />
                                        <label htmlFor="checkbox2">
                                            Не сдано
                                        </label>
                                        <br />
                                        <input type="checkbox" id="checkbox3" />
                                        <label htmlFor="checkbox3">
                                            В чтении
                                        </label>
                                    </div>
                                )}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="#" className="linkOfBook">
                                    Дизайн для реальног...
                                </a>
                            </td>
                            <td>Виктор Папан...</td>
                            <td></td>
                            <td>23.02.2023</td>
                            <td>23.03.2023</td>
                            <td>сдано</td>
                            <td className="editTable" id="edit">
                                <img src="/img/tableIcon1.svg"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="linkOfBook">
                                    Чистая архитектура
                                </a>
                            </td>
                            <td>Роберт Мартин</td>
                            <td></td>
                            <td>23.02.2023</td>
                            <td>23.03.2023</td>
                            <td>сдано</td>
                            <td className="editTable" id="edit">
                                <img src="/img/tableIcon1.svg"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="linkOfBook">
                                    Дизайн для реальног...
                                </a>
                            </td>
                            <td>Виктор Папан...</td>
                            <td>Александров Алекс...</td>
                            <td>23.02.2023</td>
                            <td>23.03.2023</td>
                            <td>сдано</td>
                            <td className="editTable" id="edit">
                                <img src="/img/tableIcon1.svg"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="linkOfBook">
                                    Чистая архитектура
                                </a>
                            </td>
                            <td>Роберт Мартин</td>
                            <td>Петров Пётр</td>
                            <td>23.02.2023</td>
                            <td>23.03.2023</td>
                            <td>сдано</td>
                            <td className="editTable" id="edit">
                                <img src="/img/tableIcon1.svg"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="linkOfBook">
                                    Дизайн для реальног...
                                </a>
                            </td>
                            <td>Виктор Папан...</td>
                            <td>Александров Алекс...</td>
                            <td>23.02.2023</td>
                            <td>23.03.2023</td>
                            <td>сдано</td>
                            <td className="editTable" id="edit">
                                <img src="/img/tableIcon1.svg"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="linkOfBook">
                                    Чистая архитектура
                                </a>
                            </td>
                            <td>Роберт Мартин</td>
                            <td>Петров Пётр</td>
                            <td>23.02.2023</td>
                            <td>23.03.2023</td>
                            <td>сдано</td>
                            <td className="editTable" id="edit">
                                <img src="/img/tableIcon1.svg"></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alljournal;
