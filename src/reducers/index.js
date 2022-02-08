import { combineReducers } from 'redux';
import characters from '../components/Search/redux/reducer';
import cart from '../components/Cart/cartSlice';
// import selectedCharacterIndex from "./selectedCharacterIndex/selectedCharacterIndex";

/**
 * Returns the combined reducer.
 * @param state
 * @param action
 */

export default combineReducers({
  search: characters,
  cart,
  // selectedCharacterIndex
});
