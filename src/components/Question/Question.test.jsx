import renderer from 'react-test-renderer';
import Question from './Question';

it('renders an Question component correctly', () => {
  const tree = renderer
    .create(
      <Question
        questionTitle="Loeerasdsaasd"
        userName="hazarcann"
        avatar="https://via.placeholder.com/150"
        questionText="questionTexttttw"
        questionImage="https://via.placeholder.com"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
