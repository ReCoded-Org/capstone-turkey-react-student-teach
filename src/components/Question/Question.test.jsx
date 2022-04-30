import React from 'react';
import renderer from 'react-test-renderer';
import Question from './Question';

it('renders an Question component correctly', () => {
  const tree = renderer
    .create(<Question question="questionassfasfas" studentInfo="Hazarcan" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
