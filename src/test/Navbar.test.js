import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('The Navbar component renders correctly', () => {
  const tree = render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar />
    </MemoryRouter>,
  );
  expect(tree).toMatchSnapshot();
});

test('Check if the component have all the links', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar />
    </MemoryRouter>,
  );
  const links = document.getElementsByTagName('a');
  expect(links.length).toBe(4);
});
