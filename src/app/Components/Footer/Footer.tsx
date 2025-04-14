import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={Styles.navigation}>
            <h3 className={Styles.author}>@constgenius</h3>
            <h3 className={Styles.menu}>constgenius@gmail.com</h3>
        </div>
    );
};

export default Footer;
