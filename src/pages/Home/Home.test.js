import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
