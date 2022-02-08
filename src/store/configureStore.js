import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
// import { get } from '../API';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

/**
 * The redux state store, built with the Epic middleware.
 */

// export const epicMiddleware = createEpicMiddleware({
//   dependencies: {
//     get
//   }
// });

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middleware you want to use in production:
// const enhancer = compose(applyMiddleware(thunk.withExtraArgument(get)));

// export function configureStore(initialState) {
//   // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
//   // See https://github.com/rackt/redux/releases/tag/v3.1.0
//   const store = createStore(rootReducer, initialState, enhancer);
//   //epicMiddleware.run(rootEpic);

//   return store;
// }

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

export default store;
