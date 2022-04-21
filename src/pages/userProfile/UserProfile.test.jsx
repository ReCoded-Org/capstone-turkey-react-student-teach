import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserProfile from './UserProfile';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <UserProfile />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
