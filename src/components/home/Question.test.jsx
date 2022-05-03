import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Question from './Question';
import store from '../../redux/store/store';

it('Render when text of no Question found removes', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Question />
        </MemoryRouter>
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
        <MemoryRouter>
          <Question
            username="Muhammed_Yusuf "
            profileImage="none"
            question="2+2=?2*2"
            answer="Yes"
          />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
