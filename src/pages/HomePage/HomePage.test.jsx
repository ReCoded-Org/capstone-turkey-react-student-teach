import renderer from 'react-test-renderer';
import HomePage from './HomePage';

it('Render when text of no HomePage found removes', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
