import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import About from './About';
import store from '../../redux/store/store';

it('Navbar snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <About />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
