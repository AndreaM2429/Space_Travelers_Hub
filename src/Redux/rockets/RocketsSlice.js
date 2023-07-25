import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  arrRock: [],
};

const url = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk('get/rockets', async (thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const data = (ArrRockets) => {
  const rockets = [];
  ArrRockets.map((rocket) => {
    rockets.push({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    });
    return rockets;
  });
  return rockets;
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const reserve = state.arrRock.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserve: true };
        }
        return rocket;
      });
      state.arrRock = reserve;
    },
    cancelRocket: (state, action) => {
      const cancelation = state.arrRock.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserve: false };
        }
        return rocket;
      });
      state.arrRock = cancelation;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.fulfilled, (state, action) => {
        const newdata = data(action.payload);
        state.arrRock = newdata;
      });
  },
});

export const { bookRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
