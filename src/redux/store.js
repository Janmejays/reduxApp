import {configureStore} from '@reduxjs/toolkit';
import cakeSlice from './slices/cakeSlice';
import icecreamSlice from './slices/icecreamSlice';
// import logger from 'redux-logger';

const getEnhancers = (getDefaultEnhancers) => {
  if (process.env.NODE_ENV === 'development') {
    const reactotron = require('./ReactotronConfig').default;
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  }
  return getDefaultEnhancers();
};


const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream: icecreamSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
 // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
 enhancers: getEnhancers,
 devTools: true,
});
export default store;