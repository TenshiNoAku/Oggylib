import { useState } from "react";
import "./UserCreate.scss";
import ComponentHeader from "./ComponentHeader/ComponentHeader";
import ComponentFooter from "./ComponentFooter/ComponentFooter.JSX";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Conformation, setConformation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = () => {
        const data = {
            surname: null,
            name: name,
            email: email,
            password: password,
            password_conformation: Conformation,
        };

        fetch("/Oggylib/public/api/admin/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.includes("errors")) {
                    alert("error");
                }
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage("Ошибка при выполнении запроса");
            });
    };

    return (
        <div className="Register">
            <ComponentHeader />
            <div className="Register-main">
                <h1 className="Register-main__title">Новый пользователь</h1>
                <section className="Register-main__items">
                    <div className="item-lastname">
                        <p className="item-lastname__title">
                            Фамилия пользователя
                        </p>
                        <input type="text" />
                    </div>
                    <div className="item-name">
                        <p className="item-name__title">Имя пользователя</p>
                        <input
                            type="text"
                            className={`input-field ${
                                errorMessage ? "input-error" : ""
                            }`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="item-login">
                        <p className="item-login__title">Логин</p>
                        <input
                            type="text"
                            className={`input-field ${
                                errorMessage ? "input-error" : ""
                            }`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="item-password">
                        <p className="item-password__title">Пароль</p>
                        <input
                            type="text"
                            className={`input-field ${
                                errorMessage ? "input-error" : ""
                            }`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="item-confirmpassword">
                        <p className="item-confirmpassword__title">
                            Подтвержение пароля (введите пароль ещё раз)
                        </p>
                        <input
                            type="text"
                            className={`input-field ${
                                errorMessage ? "input-error" : ""
                            }`}
                            value={Conformation}
                            onChange={(e) => setConformation(e.target.value)}
                        />
                    </div>
                </section>
                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}
                <button onClick={handleLogin} className="Register-main__button">
                    <p className="button-text">Создать пользователя</p>
                </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <ComponentFooter />

        </div>

    );
};
export default Register;
