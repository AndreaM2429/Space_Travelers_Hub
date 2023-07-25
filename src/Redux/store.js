import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/RocketsSlice';
import missionsReducer from './missions/MissionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,

    missions: missionsReducer,
  },
});

export default store;
