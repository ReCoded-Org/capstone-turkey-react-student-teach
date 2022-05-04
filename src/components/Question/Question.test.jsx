import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Question from './Question';
import store from '../../redux/store/store';

it('renders an Question component correctly', () => {
  const tree = renderer
<<<<<<< HEAD
    .create(<Question question="questionassfasfas" studentInfo="Hazarcan" />)
=======
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
>>>>>>> 65962305ce35a77f77d8fdb5c2edef94f05c7e83
    .toJSON();
  expect(tree).toMatchSnapshot();
});
