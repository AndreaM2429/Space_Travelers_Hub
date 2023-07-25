import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/MissionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
