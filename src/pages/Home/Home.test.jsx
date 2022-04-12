import renderer from 'react-test-renderer';
import Home from './Home';

it('Render when text of no HomePage found removes', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
