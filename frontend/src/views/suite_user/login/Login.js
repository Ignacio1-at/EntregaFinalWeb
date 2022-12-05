import React, { useState, useEffect, useCallback } from "react";
import SlidingMenu from "../../../shared/layouts/slidingMenu/SlidingMenu";
import MenuSection from "../../../shared/layouts/menuSection/MenuSection";
import Login from "../../../shared/layouts/login/login"

const LoginInit = () => {
    return (
        <React.Fragment>
            {/* <login /> */}
            <Login />
        </React.Fragment>
    );
};

export default LoginInit;
