import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import { selectCount, selectCart, selectTotal } from './cartSlice';
import CartItem from './components/CartItem/CartItem';

const Cart = (props) => {
  const count = useSelector(selectCount);
  const totalAmount = useSelector(selectTotal);
  const items = useSelector(selectCart);

  return (
    <section className={styles.container}>
      <div>Items count : {count} </div>
      <div>
        {Object.values(items).map((item) => {
          return <CartItem {...item} />;
        })}
      </div>
      <div>Total : {totalAmount} </div>
    </section>
  );
};

export default Cart;
