import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

export default function Card({ data, type, setCurrSong }){
    console.log("data in card:", data);
    const { image, follows, title, slug, songs } = data;
    
    return (
      <Link to={`albums/${slug}`} style={{ textDecoration: "none" }}>
      <Tooltip title={`${songs.length} songs`} placement="top" arrow>
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
      </Tooltip>
    </Link>
    );
}