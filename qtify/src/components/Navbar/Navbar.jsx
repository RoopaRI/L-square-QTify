import React from "react";
import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

export default function Navbar(){
    return (
        <nav className={styles.navBar}>
            <Logo />
            <SearchBar />
            <Button text="Give Feedback" />
        </nav>
    );
}