import React, { useState } from "react";
import "./LoginForm.scss";
import Home from "./Home";
import ComponentHeaderLogo from "./ComponentHeaderLogo/ComponentHeaderLogo";
import ComponentFooter from "./ComponentFooter/ComponentFooter.JSX";
import ComponentHeader from "./ComponentHeader/ComponentHeader";
import ComponentNotification from "./ComponentNotification/ComponentNotification";
import ComponentMyBooks from "./ComponentMyBooks/ComponentMyBooks";
import ComponentBookCard from "./ComponentBookCard/ComponentBookCard";
import ComponentMain from "./ComponentMain/ComponentMain";
import ComponentAdminPanel from "./ComponentAdminPanel/ComponentAdminPanel";

const Mybooks = () => {

    return (
        <div className="wrapper clear">
            <ComponentHeader />
            {/* <ComponentMain /> */}
            {/*<ComponentAdminPanel />*/}
            { <ComponentMyBooks /> }
            {/* <ComponentBookCard /> */}
            <ComponentFooter />
        </div>
    );
};

export default Mybooks;
