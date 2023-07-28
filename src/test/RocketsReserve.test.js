import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import RocketReserve from '../components/RocketsReserve';
import { getRockets } from '../Redux/rockets/RocketsSlice';

test('RocketsReserved renders correctly', async () => {
  await store.dispatch(getRockets());
  const tree = render(
    <Provider store={store}>
      <RocketReserve />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
