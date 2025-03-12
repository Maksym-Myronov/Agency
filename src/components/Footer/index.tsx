import React from "react";
import { Link } from "react-router-dom";
// Images
import facebookIcon from "assets/images/facebook.svg";
import instageamIcon from "assets/images/instagram.svg";
import youtubeIcon from "assets/images/youtube.svg";
import mailIcon from "assets/images/Mail.svg";
import phoneIcon from "assets/images/Phone.svg";
import placeholderIcon from "assets/images/Placeholder.svg";
import footerLogo from "assets/images/footer-white-logo.svg";
// Styles
import s from "./index.module.scss";

export const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__container}>
                <div>
                    <img
                        src={footerLogo}
                        alt="logo"
                        className={s.footer__logo}
                    />
                    <div className={s.footer__contacts}>
                        <img src={placeholderIcon} alt="icon" />
                        <p>111A T. Shevchenko</p>
                    </div>
                    <div className={s.footer__contacts}>
                        <img src={phoneIcon} alt="icon" />
                        <p>0054-6272444</p>
                    </div>
                    <div className={s.footer__contacts}>
                        <img src={mailIcon} alt="icon" />
                        <p>Info@mail.com</p>
                    </div>
                </div>
                <div className={s.footer__links}>
                    <p className={s.footer__link}>Home</p>
                    <p className={s.footer__link}>About us</p>
                    <p className={s.footer__link}>Gallery</p>
                    <p className={s.footer__link}>Interior</p>
                    <p className={s.footer__link}>Contact</p>
                </div>
                <div className={s.footer__links}>
                    <p className={s.footer__link}>Garden House</p>
                    <p className={s.footer__link}>Garden Salon</p>
                    <p className={s.footer__link}>Commercial Workspace</p>
                    <p className={s.footer__link}>Lake House</p>
                    <p className={s.footer__link}>Forest House</p>
                </div>
                <div className={s.footer__links}>
                    <p className={s.footer__link}>Barn House</p>
                    <p className={s.footer__link}>Style</p>
                    <p className={s.footer__link}>Style</p>
                    <p className={s.footer__link}>Style</p>
                    <p className={s.footer__link}>Style</p>
                </div>
            </div>
            <div className={s.footer__block}>
                <div className={s.footer__text}>
                    <p className={s.footer__privacy}>© Trident 2023</p>
                    <p className={s.footer__privacy}>Privacy Policy</p>
                </div>
                <div className={s.footer__icons}>
                    <Link to="">
                        <img src={facebookIcon} alt="icon" />
                    </Link>
                    <Link to="">
                        <img src={instageamIcon} alt="icon" />
                    </Link>
                    <Link to="">
                        <img src={youtubeIcon} alt="icon" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};
