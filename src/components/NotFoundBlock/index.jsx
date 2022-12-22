import React from "react";

import styles from "./NotFoundBlock.module.scss";

console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h2>
        <span>:(</span>
        <br />
        Ничего не найдено
      </h2>
      <p className={styles.description}>К сожалению у нас нет такой страницы</p>
    </div>
  );
};

export default NotFoundBlock;
