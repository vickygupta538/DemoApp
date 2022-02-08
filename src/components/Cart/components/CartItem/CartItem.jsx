import React from 'react';
import styles from './CartItem.module.scss';
import ItemCardImage from '../../../../assets/ItemCard.webp';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const CartItem = (props) => {
  const { title, price } = props;
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src={ItemCardImage} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.description}>
            <div>{title}</div>
            {new Array(5).fill(0).map((item) => {
              return <StarIcon className={styles.star} />;
            })}
            <div className={styles.price}>
              <CurrencyRupeeIcon className={styles.rupeeIcon} />
              {price}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          A delectable combination of freshly cooked onions & paneer with our in house sauce
        </div>
      </div>
    </section>
  );
};

export default CartItem;
