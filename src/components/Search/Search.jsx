import React, { Fragment, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import {searchCharacters} from './redux/reducer'
import {useDispatch, useSelector} from 'react-redux';
import styles from './Search.module.scss'
import Product from '../../common/Product/Product'
// import Detail from '../../common/Detail/Detail'

const Search = (props) => {
    const {searchTerm} = useParams();
    const dispatch = useDispatch(); 
    const characters = useSelector(state => state.search);

    useEffect(() => {
        dispatch(searchCharacters(searchTerm));
    },[searchTerm, dispatch])

    return (
        <div className={styles.parentContainer}>
            <div >search term: {searchTerm}</div>
            {characters.isRequesting && <div>Loading...</div>}

            {characters.requested && characters.data.length === 0 && <div>No Data Found</div>}
             
            <section className={styles.container}>
            {!characters.isRequesting && characters.data.length > 0 && characters.data.map(character =>{
                return <Product {...character} />
            })}
            {characters.isRequesting && new Array(5).fill({}).map(character =>{
                return <Product {...character} />
            })}
            </section>
        </div>
    )
}
export default Search;
  