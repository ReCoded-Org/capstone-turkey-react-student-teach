import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Question from './Question';
import store from '../../redux/store/store';

it('renders an Question component correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Question
            questionTitle="Loeerasdsa"
            userName="hazarcan"
            avatar="https://via.placeholder.com/150"
            questionText="questionText"
          />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
