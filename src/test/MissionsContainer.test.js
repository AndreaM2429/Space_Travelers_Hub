import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import { fetchMissions } from '../Redux/missions/MissionsSlice';
import MissionsContainer from '../components/MissionContainer';

test('Simulate an user interaction: join a mission and display "Leave Mission"', async () => {
  await store.dispatch(fetchMissions());
  const tree = render(
    <Provider store={store}>
      <MissionsContainer />
    </Provider>,
  );

  const joinButton = screen.queryAllByText(/Join Mission/i);
  fireEvent.click(joinButton[0]);
  const leaveMissions = tree.getByText(/Leave Mission/i);
  expect(leaveMissions).toBeInTheDocument();
});
