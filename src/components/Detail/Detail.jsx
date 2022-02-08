import React from 'react';
import styles from './Detail.module.scss';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Description from './components/Description/Description';
import Carousel from '../../common/Carousel/Carousel';

//https://b.zmtcdn.com/data/dish_photos/752/c5e0d7b988590b6cc3c0009ec22c0752.jpg?output-format=webp

const Detail = (props) => {
  return (
    <section className={styles.container} data-test="SearchResultDetailViewComponent">
      <ImageGrid />
      <Carousel />
      <Description />
      <section>This is the last section</section>
    </section>
  );
};

export default Detail;
