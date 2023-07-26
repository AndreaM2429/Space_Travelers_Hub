import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await fetch(url);
      return response.json() || [];
    } catch (error) {
      return 'There was an error and no missions were returned';
    }
  },
);

const initialState = {
  missions: [],
  status: 'idle',
  // reserved: false,
};

const data = (missions) => {
  const missionsList = [];
  missions.forEach((mission) => {
    missionsList.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserve: false,
    });
    return missionsList;
  });
  return missionsList;
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const joinMission = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserve: true };
        }
        return mission;
      });
      state.missions = joinMission;
    },
    cancelMission: (state, action) => {
      const cancelMission = state.missions.map((mission) => {
        if (
          mission.mission_id === action.payload) {
          return { ...mission, reserve: false };
        }
        return mission;
      });
      state.missions = cancelMission;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = data(action.payload);
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, cancelMission } = missionsSlice.actions;
export default missionsSlice.reducer;
