import renderer from 'react-test-renderer';
import HomeContent from './HomeContent';

it('Render when text of no HomeContent found removes', () => {
  const tree = renderer.create(<HomeContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
