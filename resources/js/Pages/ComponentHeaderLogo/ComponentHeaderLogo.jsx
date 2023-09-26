import React from "react";

export const ComponentHeaderLogo = () => {
    return (
        <header className="header">
            <div className="logo">
                <img
                    width={235}
                    height={57}
                    src="./img/logo.svg"
                    alt="Логотип"
                />
            </div>
        </header>
    );
};
export default ComponentHeaderLogo;
