import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import UserProfile from './UserProfile';
import store from '../../redux/store/store';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <UserProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
