import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Question from './Question';
import store from '../../redux/store/store';

it('renders an Question component correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Question
          questionTitle="Loeerasdsa"
          userName="hazarcan"
          avatar="https://via.placeholder.com/150"
          questionText="questionText"
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
