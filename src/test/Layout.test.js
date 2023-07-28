import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Layout from '../components/Layout';

test('Layout component renders correctly', () => {
  const tree = render(
    <MemoryRouter initialEntries={['/']}>
      <Layout />
    </MemoryRouter>,
  );
  expect(tree).toMatchSnapshot();
});
