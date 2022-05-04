import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import store from '../../redux/store/store';

test('Initial test for Footer.jsx', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Footer />
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
