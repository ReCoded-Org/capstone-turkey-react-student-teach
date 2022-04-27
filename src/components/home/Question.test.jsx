import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Question from './Question';
import store from '../../redux/store/store';

it('Render when text of no Question found removes', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Question />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
// eslint-disable-next-line jest/no-identical-title
it('Render when text of no Question found removes', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Question
          username="Muhammed_Yusuf "
          profileImage="none"
          question="2+2=?2*2"
          answer="Yes"
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
