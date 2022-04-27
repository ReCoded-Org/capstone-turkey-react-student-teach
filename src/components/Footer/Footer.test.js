import renderer from 'react-test-renderer';
import Footer from './Footer';

test('Initial test for Footer.jsx', () => {
  const tree = renderer.create(<Footer />).toJSON();

  expect(tree).toMatchSnapshot();
});
