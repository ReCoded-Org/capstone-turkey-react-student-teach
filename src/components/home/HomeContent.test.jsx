import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HomeContent from './HomeContent';
import store from '../../redux/store/store';

it('Render when text of no HomeContent found removes', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <HomeContent />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
