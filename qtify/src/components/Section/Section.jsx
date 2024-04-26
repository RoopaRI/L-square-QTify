import styles from "./Section.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "../Card/card";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
// import BasicTabs from "../Tabs/Tabs";

export default function Section({ title, data, type, setCurrSong }){
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
    return(
      <div>
        <div class={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!toggle ? "Show All" : "Collapse All"}
          </h4>
        </div>
        <Carousel
              data={data}
              component={(data1) => (
                <Card
                  data={data1}
                  type={type}
                  setCurrSong={setCurrSong}
                  key={data1.id}
                />
              )}
            />
      </div>
    );
}