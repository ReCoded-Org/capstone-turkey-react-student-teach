import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Newsletter from './Newsletter';
import store from '../../redux/store/store';

test('Initial test', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Newsletter />
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
