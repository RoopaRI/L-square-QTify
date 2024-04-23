import React from "react";
import LogoImage from "../../assests/logo.png";
import styles from "./logo.module.css";


export default function logo(){
    return (
        <img src={LogoImage} alt="Logo"vclassName={styles.logo}/>
    );
}