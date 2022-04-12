import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Questions from './Questions';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Questions />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
