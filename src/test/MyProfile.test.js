import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../Redux/store';
import { fetchMissions } from '../Redux/missions/MissionsSlice';
import { getRockets } from '../Redux/rockets/RocketsSlice';
import Rockets from '../components/Rockets';

test('My profile renders correctly', async () => {
  await store.dispatch(fetchMissions());
  await store.dispatch(getRockets());
  const tree = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

test('Simulate an user interaction: reserve a rocket and display it in the MyProfile page', async () => {
  await store.dispatch(getRockets());
  expect(store.getState().rockets).toBeTruthy();
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  const tree = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );

  const reserveButton = screen.queryAllByText(/Reserve Rocket/i);
  fireEvent.click(reserveButton[0]);

  const rocketReserved = tree.getByTitle(/Falcon 1/i);

  expect(rocketReserved).toBeInTheDocument();
});
