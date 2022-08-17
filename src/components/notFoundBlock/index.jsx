import React from 'react';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.root}>Ничего не найдено :(</h1>
        <a href=".." className={styles.link}>
          Вернуться назад
        </a>
      </div>
    </>
  );
};

export default NotFoundBlock;
