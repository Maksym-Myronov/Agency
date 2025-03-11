import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route as RouteEnum } from "routes/route.enum.ts";
// Images
import logo from "assets/images/logo.svg";
import catalog from "assets/images/order-catalog.svg";
import mobileLogo from "assets/images/mobile-logo.svg";
import arrowHeader from "assets/images/Arrow-header.svg";
// Styles
import s from "./index.module.scss";

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className={s.header}>
            <img src={logo} alt="logo" className={s.header__logo} />
            <img
                src={mobileLogo}
                alt="mobile logo"
                className={s.header__logo__mobile}
            />
            <div
                className={`${s.header__links} ${
                    isMenuOpen ? s.header__links_opens : ""
                }`}
            >
                <div className={s.header__line}>
                    <p>Order trident Catalogue</p>
                    <img src={arrowHeader} alt="arrowHeader" />
                </div>
                <div
                    className={`${s.header__links} ${
                        isMenuOpen ? s.header__links_open : ""
                    }`}
                >
                    <Link to={RouteEnum.General}>
                        <p className={s.header__link}>Home</p>
                    </Link>
                    <Link to={RouteEnum.AboutUs}>
                        <p className={s.header__link}>About us</p>
                    </Link>
                    <Link to={RouteEnum.Gallery}>
                        <p className={s.header__link}>Gallery</p>
                    </Link>
                    <Link to={RouteEnum.Styles}>
                        <p className={s.header__link}>Styles</p>
                    </Link>
                    <Link to={RouteEnum.Interior}>
                        <p className={s.header__link}>Interior</p>
                    </Link>
                    <Link to={RouteEnum.ContactUs}>
                        <p className={s.header__link}>Contact</p>
                    </Link>
                </div>
            </div>
            <div
                className={`${s.burger} ${isMenuOpen ? s.burger_open : ""}`}
                onClick={toggleMenu}
            >
                <span
                    className={`${s.burger__line} ${
                        isMenuOpen ? s.burger__line_open : ""
                    }`}
                ></span>
                <span
                    className={`${s.burger__line} ${
                        isMenuOpen ? s.burger__line_open : ""
                    }`}
                ></span>
                <span
                    className={`${s.burger__line} ${
                        isMenuOpen ? s.burger__line_open : ""
                    }`}
                ></span>
            </div>
            <img src={catalog} alt="catalog" className={s.header__catalog} />
        </div>
    );
};
