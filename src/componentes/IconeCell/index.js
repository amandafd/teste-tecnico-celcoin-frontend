import { Icon } from "@iconify/react";
import React from "react";
import styles from "./IconeCell.module.css";

function IconeCell(props) {
  return (
    <span>
      <svg className={styles.gradientCell}>
        <defs>
          <linearGradient id="gradientC" x1="0.19" y1="0.11" x2="0.81" y2="0.89">
            <stop offset="0%" stop-color="rgba(255, 0, 46, 1)" />
            <stop offset="100%" stop-color="rgba(235, 0, 255, 1)" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.iconeCell}>
        <Icon icon="uil:cell" width={props.width} />
      </div>
    </span>
  );
}

export default IconeCell;
