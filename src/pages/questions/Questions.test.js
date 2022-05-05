import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Questions from './Questions';
import store from '../../redux/store/store';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Questions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
