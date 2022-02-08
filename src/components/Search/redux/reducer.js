import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import get from '../../../API';

const url = 'https://swapi.dev/api/people/?search=';
// First, create the thunk
export const searchCharacter = createAsyncThunk('users/fetchByIdStatus', async (payload) => {
  const response = await get(url, payload);
  return response.data.results;
});

const initialState = {
  data: [],
  isRequesting: false,
  error: null,
  requested: false,
};

// Then, handle actions in your reducers:
const searchCharacters = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(searchCharacter.pending, (state, action) => {
        // Add user to the state array
        state.isRequesting = true;
      })
      .addCase(searchCharacter.fulfilled, (state, action) => {
        // Add user to the state array
        state.data = action.payload;
        state.isRequesting = false;
      })
      .addCase(searchCharacter.rejected, (state, action) => {
        // Add user to the state array
        state.error = action.payload;
        state.isRequesting = false;
      });
  },
});

// Later, dispatch the thunk as needed in the app
export default searchCharacters.reducer;
