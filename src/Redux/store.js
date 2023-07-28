import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rocketsReducer from './rockets/RocketsSlice';
import missionsReducer from './missions/MissionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
