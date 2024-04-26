import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ data, type, setCurrSong }){
    console.log("data in card:", data);
    const { image, follows, title, slug, songs } = data;
    console.log(songs)
    return (
        <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
    );
}