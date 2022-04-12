import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import About from './About';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
