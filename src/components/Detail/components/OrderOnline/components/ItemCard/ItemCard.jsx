import React, { forwardRef } from 'react';
import styles from './ItemCard.module.scss';
import ItemCardImage from '../../../../../../assets/ItemCard.webp';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import { addToCart } from '../../../../../Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import ImageRender from '../../../../../../common/ImageRender/ImageRender';

const ItemCard = forwardRef((props, ref) => {
  const { url, height, width, fn } = props;
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      addToCart({
        id: v4(),
        title: 'pizza',
        price: 89,
      }),
    );
  };
  return (
    <section ref={ref} className={styles.container}>
      <div className={styles.left}>
        <ImageRender url={url} height={height} width={width} />
        {/* <img src={ItemCardImage} alt="" loading="lazy" /> */}
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.description}>
            <div>Onions Pizza</div>
            {new Array(5).fill(0).map((item) => {
              return <StarIcon className={styles.star} />;
            })}
            <div className={styles.price}>
              <CurrencyRupeeIcon className={styles.rupeeIcon} />
              89
            </div>
          </div>
          <div className={styles.addOption}>
            <button onClick={addItem}>
              <AddIcon /> Add
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          A delectable combination of freshly cooked onions & paneer with our in house sauce
        </div>
      </div>
    </section>
  );
});

export default ItemCard;
