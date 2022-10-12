import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

const store = configureStore(rootReducer);

export default store;
