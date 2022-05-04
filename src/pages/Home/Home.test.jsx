import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from './Home';
import store from '../../redux/store/store';

it('Render when text of no HomePage found removes', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
