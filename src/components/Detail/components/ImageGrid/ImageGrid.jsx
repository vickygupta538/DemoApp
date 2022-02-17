import React from 'react';
import styles from './ImageGrid.module.scss';
import firstImg from '../../../../assets/first.webp';
import secondImg from '../../../../assets/second.webp';
import thirdImg from '../../../../assets/third.webp';
import fourthImg from '../../../../assets/fourth.webp';

const ImageGrid = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src={firstImg} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.leftTop}>
          <img src={secondImg} alt="" />
          <img src={thirdImg} alt="" />
        </div>
        <div className={styles.leftBottom}>
          <img src={fourthImg} alt="" />
          <img src={fourthImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
