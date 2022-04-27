import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Contact from './Contact';
import store from '../../redux/store/store';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Contact />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
