import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Rockets from '../components/Rockets';
import { getRockets } from '../Redux/rockets/RocketsSlice';

test('Rockets component render correctly', async () => {
  await store.dispatch(getRockets());
  const tree = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

describe('Test rocket reducers and functions', () => {
  it('Fetches data from API', async () => {
    await store.dispatch(getRockets());
    expect(store.getState().rockets).toBeTruthy();
  });

  test('Simulate an user interaction: reserve a rocket', async () => {
    await store.dispatch(getRockets());
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const reserveButton = screen.queryAllByText(/Reserve Rocket/i);
    fireEvent.click(reserveButton[0]);

    const badgeReserved = screen.getByText(/Cancel Reservation/i);
    expect(badgeReserved).toBeInTheDocument();
  });

  test('Simulate an user interaction: reserve a rocket and after cancel it', async () => {
    await store.dispatch(getRockets());
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const reserveButton = screen.queryAllByText(/Reserve Rocket/i);
    fireEvent.click(reserveButton[0]);
    const badgeReserved = screen.getByTitle(/reserved/i);
    const cancelbutton = screen.queryAllByText(/Cancel Reservation/i);
    fireEvent.click(cancelbutton[0]);

    expect(badgeReserved).not.toBeInTheDocument();
  });
});
