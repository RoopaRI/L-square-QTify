import React from "react";
import styles from "./HeroSection.module.css";
import heroImage from "../../assests/headphone.png";

export default function HeroSection(){
    return (
        <div className={styles.HeroSection}>
            <div className={styles.HeroText}>
                <h3>100 Thousand Songs, ad-free</h3>
                <h3> Over thousands podcast episodes</h3>
            </div>
            <div className={styles.heroImage}>
                <img src={heroImage} alt="headphone" height="250px" width="250px" />
            </div>
        </div>
    );
}