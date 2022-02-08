import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/amazon_logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { CartOverview } from '../../components/Cart';

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  let navigate = useNavigate();

  const onSearch = (event) => {
    navigate(`/search/${searchTerm}`);
  };
  return (
    <header className={styles.header} data-test="headerComponent">
      <div className={styles.headingContainer}>
        <img src={logo} alt="amazon logo" />
        <div className={styles.headingContent}>
          <div style={{ flex: 1 }}>Star Wars Character Search</div>
          <section className={styles.searchContainer}>
            <input
              type="text"
              name="searchTerm"
              value={searchTerm}
              onChange={({ target }) => setSearchTerm(target.value)}
            />
            <SearchIcon onClick={onSearch} />
          </section>
          <CartOverview />
        </div>
      </div>
    </header>
  );
};

export default Header;
