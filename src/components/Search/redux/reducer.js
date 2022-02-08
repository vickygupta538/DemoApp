import { createAction } from "redux-actions";

const pageLevelErrorOccured = createAction('PAGE_LEVEL_ERROR_OCCURED');
const searchCharacterRequested = createAction('SEARCH_CHARACTER_REQUESTED');
const searchCharacterFulfilled = createAction('SEARCH_CHARACTER_FULFILLED');

const searchCharacter = 'https://swapi.dev/api/people/?search=';

export const searchCharacters = (payload) => {
    return async (dispatch, getState, get) => {
      try{
        dispatch(searchCharacterRequested());
        const response = await get(searchCharacter, payload);
        return dispatch(searchCharacterFulfilled(response.data.results));
        // return response;
      } catch(error){
        dispatch(pageLevelErrorOccured(error));
      }
        
    }
}

const initialState = {
  data : [],
  isRequesting : false,
  error : null,
  requested: false
}
const characters = (state = initialState,  action) => {
  switch (action.type) {
    case 'SEARCH_CHARACTER_REQUESTED':
      return {
        ...state,
        isRequesting : true
      };
    case 'SEARCH_CHARACTER_FULFILLED':
      return {
          ...initialState,
          data: action.payload,
          requested : true
        }
    default:
      return state;
  }
};

export default characters;