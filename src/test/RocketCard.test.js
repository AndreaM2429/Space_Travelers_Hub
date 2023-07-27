import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import RocketCard from '../components/RocketCard';

test('RocketCard render correctly', async () => {
  const data = {
    id: 'id1',
    name: 'Rocket1',
    image: 'rocket.png',
    description: 'description of the rocket',
  };
  const tree = render(
    <Provider store={store}>
      <RocketCard ArrRocket={data} />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
