import renderer from 'react-test-renderer';
import BookmarkPage from './BookmarkPage';

it('Render when text of no bookmark found removes', () => {
  const tree = renderer.create(<BookmarkPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
