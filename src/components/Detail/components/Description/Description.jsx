import React from 'react';
import styles from './Description.module.scss';
import StarRateIcon from '@mui/icons-material/StarRate';
import DirectionsIcon from '@mui/icons-material/Directions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Outlet } from 'react-router-dom';
import OrderOnline from '../OrderOnline/OrderOnline';
import Overview from '../Overview/Overview';

const Description = (props) => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>La Pino's Pizza</div>
        <div className={styles.ratingContainer}>
          <div className={styles.rating}>
            <div className={styles.ratingValue}>3.5*</div>
            <div>
              <div>36</div>
              <div>Dining Reviews</div>
            </div>
          </div>
          <div className={styles.rating}>
            <div className={styles.ratingValue}>3.9*</div>
            <div>
              <div>3312</div>
              <div>Delivery Reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['m-b-1']}>Pizza, Italian, Fast Food, Pasta</div>
      <div className={styles['m-b-1']}>Community Centre, New Friends Colony, New Delhi</div>
      <div className={styles['m-b-1']}>Open now - 10am – 4am (Today)</div>
      <div className={styles.buttonActions}>
        <button>
          <StarRateIcon className={styles.starIcon} />
          Add Review
        </button>
        <button>
          <DirectionsIcon className={styles.starIcon} />
          Direction
        </button>
        <button>
          <BookmarkIcon className={styles.starIcon} />
          Bookmark
        </button>
        <button>
          <ShareIcon className={styles.starIcon} />
          Share
        </button>
      </div>

      <nav className={styles.navigation}>
        <NavLink
          to="overview"
          className={({ isActive }) => (isActive ? styles.selected : styles.unselected)}
        >
          Overview
        </NavLink>
        <NavLink
          to="order-online"
          className={({ isActive }) => (isActive ? styles.selected : styles.unselected)}
        >
          Order Online
        </NavLink>
        <NavLink to="/reviews" activeClassName="selected">
          Reviews
        </NavLink>
        <NavLink to="/photos" activeClassName="selected">
          Photos
        </NavLink>
        <NavLink to="/menu" activeClassName="selected">
          Menu
        </NavLink>
      </nav>

      <Outlet />

      <Routes>
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="overview" element={<Overview />} />
      </Routes>
    </section>
  );
};

export default Description;
