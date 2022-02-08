import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartOverview.module.scss';
import { selectCount } from './cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const CartOverView = (props) => {
  const navigate = useNavigate();
  const count = useSelector(selectCount);

  const navigateTo = () => {
    navigate('/cart');
  };

  return (
    <section className={styles.container} onClick={navigateTo}>
      <ShoppingCartIcon fill="white" /> {count > 0 && count}
    </section>
  );
};

export default CartOverView;
