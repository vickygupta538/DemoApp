import React from 'react';
import styles from './Detail.module.scss';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Description from './components/Description/Description';
import Carousel from '../../common/Carousel/Carousel';
import usePrevious from '../../hooks/usePrevious';
import Navigation from './components/Navigation/Navigation';

//https://b.zmtcdn.com/data/dish_photos/752/c5e0d7b988590b6cc3c0009ec22c0752.jpg?output-format=webp

const Detail = (props) => {
  const val = usePrevious(5);
  console.log('detail', val);
  return (
    <section className={styles.container} data-test="SearchResultDetailViewComponent">
      <ImageGrid />
      <Carousel />
      <Description />
      <Navigation />
      <section>This is the last section</section>
    </section>
  );
};

export default Detail;
