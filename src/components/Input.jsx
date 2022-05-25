import React, { useState } from "react";
import styles from "./todo.module.css";

const Input = ({ el }) => {
  const [isCompleted, setisCompleted] = useState(el.isCompleted);
  //{styles.}
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.inputBox}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setisCompleted(e.target.checked)}
          />

          <p className={isCompleted ? styles.m : ""}> {el} </p>
        </div>

        <div className={styles.rating}>
          <label>
            <input type="radio" name="stars" value="1" />
            <span className={styles.icon}>★</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Input;
