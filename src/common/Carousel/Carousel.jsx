import React, { useState } from 'react';
import styles from './Carousel.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageRender from '../ImageRender/ImageRender';

const images = [
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
];
const showCount = 4;

const Carousel = (props) => {
  const [index, setIndex] = useState(0);
  const len = images.length;

  const moveRight = () => {
    setIndex((index) => (index + 1) % len);
  };
  const moveLeft = () => {
    setIndex((index) => (index - 1 + len) % len);
  };

  return (
    <section className={styles.container}>
      <div className={styles.left} onClick={moveLeft}>
        <ArrowBackIcon />
      </div>
      <div className={styles.right} onClick={moveRight}>
        <ArrowForwardIcon />
      </div>
      <div className={styles.content} style={{ transform: `translateX(-${index * (100 / 4)}%)` }}>
        {images.map((image) => {
          return (
            // <ImageRender url={image} height={100} width={100} />
            <div className={styles.imageDiv}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
