import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Outlet } from 'react-router-dom';
import OrderOnline from '../OrderOnline/OrderOnline';
import Overview from '../Overview/Overview';

const Description = (props) => {
  return (
    <>
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
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? styles.selected : styles.unselected)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="/photos"
          className={({ isActive }) => (isActive ? styles.selected : styles.unselected)}
        >
          Photos
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? styles.selected : styles.unselected)}
        >
          Menu
        </NavLink>
      </nav>

      <Outlet />

      <Routes>
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="overview" element={<Overview />} />
      </Routes>
    </>
  );
};

export default Description;
