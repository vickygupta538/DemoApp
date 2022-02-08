import React, { useState, useRef } from 'react';
import styles from './ImageRender.module.scss';
import useIntersection from './IntersectionObserver';

const ImageRender = (props) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const onLoad = () => {
    imgRef.current.remove();
  };

  const { url, height, width } = props;
  return (
    <>
      <div
        className={styles.imageContainer}
        ref={imgRef}
        style={{
          paddingBottom: `${(height / width) * 100}%`,
          width: '100%',
        }}
      ></div>
      {isInView && <img className={styles.image} onLoad={onLoad} src={url} alt="" />}
    </>
  );
};

export default ImageRender;
