import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.spinner}>
                <div className={styles.rect1}></div>
                <div className={styles.rect2}></div>
                <div className={styles.rect3}></div>
                <div className={styles.rect4}></div>
                <div className={styles.rect5}></div>
            </div>
        </div>
    );
};

export default Loading;
