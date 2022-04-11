import renderer from 'react-test-renderer';
import Question from './Question';

it('Render when text of no Question found removes', () => {
  const tree = renderer.create(<Question />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('Render when text of no Question found removes', () => {
  const tree = renderer
    .create(
      <Question
        username="Muhammed_Yusuf "
        profileImage="none"
        question="2+2=?2*2"
        answer="Yes"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
