import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Contact from './Contact';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
