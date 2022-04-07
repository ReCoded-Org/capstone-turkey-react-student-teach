import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
