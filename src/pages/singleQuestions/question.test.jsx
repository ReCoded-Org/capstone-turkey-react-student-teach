import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Question from './question';
import store from '../../redux/store/store';

it('Single Question snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Question />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
