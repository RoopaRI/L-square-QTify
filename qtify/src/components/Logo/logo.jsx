import React from "react";
import LogoImage from "../../assests/logo.png"
import styles from "./logo.module.css"

export default function logo(){
    return (
        <img className={styles.logo} src={LogoImage} alt="Logo" />
    );
}