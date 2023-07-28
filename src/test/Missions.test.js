import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Missions from '../components/Missions';

test('Mission render correctly', async () => {
  const data = {
    mission_id: '6C42550',
    mission_name: 'SES',
    mission_description: 'SES S.A. is a communications satellite owner and operator providing video and data connectivity worldwide to broadcasters, content and internet service providers, mobile and fixed network operators, governments and institutions, with a mission to “connect, enable, and enrich”. SES operates more than 50 geostationary orbit satellites and 16 medium Earth orbit satellites. These comprise the well-known European Astra TV satellites, the O3b data satellites and others with names including AMC, Ciel, NSS, Quetzsat, YahSat and SES.',
  };
  const tree = render(
    <Provider store={store}>
      <div>
        <table>
          <Missions ArrRocket={data} />
        </table>
      </div>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
