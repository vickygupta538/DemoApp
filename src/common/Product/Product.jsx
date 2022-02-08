import React from "react";
import styles from './Product.module.scss'; 
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useNavigate} from 'react-router-dom';

//https://b.zmtcdn.com/data/dish_photos/752/c5e0d7b988590b6cc3c0009ec22c0752.jpg?output-format=webp


const Product = props => {
 
    const { hair_color, skin_color, eye_color, birth_year, gender, name, url } = props;

    const navigate = useNavigate();
    const gotoDetailPage = () => {
      const arr = url.split('/');
      arr.pop();
      navigate(`/detail/${arr[arr.length-1]}`)
    }

  return (
    // <section className={styles.container} data-test="SearchResultDetailViewComponent">
    //   <h2>{name ? name : <Skeleton />}</h2>
    //   <div className={styles.attributeHeading} >Hair Color</div>
    //   <div className={styles.attributeContent}>{hair_color ? hair_color : <Skeleton />}</div>
    //   <div className={styles.attributeHeading}>Skin Color</div>
    //   <div className={styles.attributeContent}>{skin_color ? skin_color : <Skeleton />}</div>
    //   <div className={styles.attributeHeading}>Eye Color</div>
    //   <div className={styles.attributeContent}>{eye_color ? eye_color : <Skeleton />}</div>
    //   <div className={styles.attributeHeading}>Birth Year</div>
    //   <div className={styles.attributeContent}>{birth_year ? birth_year : <Skeleton />}</div>
    //   <div className={styles.attributeHeading}>Gender</div>
    //   <div className={styles.attributeContent}>{gender ? gender : <Skeleton />}</div>
    //   {name && <button onClick={gotoDetailPage}>Click for More info</button>}
    // </section>

    <section className={styles.container} data-test="SearchResultDetailViewComponent">
      <img className={styles.product} src="https://b.zmtcdn.com/data/dish_photos/752/c5e0d7b988590b6cc3c0009ec22c0752.jpg?output-format=webp" loading="lazy"/>
      <div className={styles.firstDiv}>
        <div>Dominos Pizza</div>
        <div className={styles.secondChild}>4*</div>
      </div>
      <div className={styles.secondDiv}>
        <div>Fast Food, italian, Pizza, Desert</div>
        <div className={styles.secondChild}>150 for one</div>
      </div>
      <hr />
      <div>
        <img className={styles.bottomImage} src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" />
        <div>Follows all Max Safety measures to ensure your food is safe</div>
      </div>
    </section>
    
  );
};

export default Product;
