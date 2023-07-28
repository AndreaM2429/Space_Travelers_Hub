import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../Redux/store';
import JoinedMissionsList from '../components/JoinedMissions';
import { fetchMissions } from '../Redux/missions/MissionsSlice';
import MyProfile from '../components/MyProfile';
import MissionsContainer from '../components/MissionContainer';

test('Joined Missions renders correctly', async () => {
  await store.dispatch(fetchMissions());
  const tree = render(
    <Provider store={store}>
      <JoinedMissionsList />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

test('It should only render Missions that user have selected Join', async () => {
  await store.dispatch(fetchMissions());
  expect(store.getState().missions).toBeTruthy();
  render(
    <Provider store={store}>
      <MissionsContainer />
    </Provider>,
  );

  const tree = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );

  const joinButton = screen.queryAllByText(/Join Mission/i);
  fireEvent.click(joinButton[0]);

  const missionJoined = tree.getByTitle(/Thaicom/i);

  expect(missionJoined).toBeInTheDocument();
});
