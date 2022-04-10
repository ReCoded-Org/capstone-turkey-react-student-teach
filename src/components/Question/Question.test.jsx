import React from 'react';
import renderer from 'react-test-renderer';
import Question from './Question';

it('renders an Question component correctly', () => {
  const tree = renderer
    .create(
      <Question
        questionTitle="Loeerasdsa"
        userName="hazarcan"
        avatar="https://via.placeholder.com/150"
        questionText="questionText"
        questionImage="https://via.placeholder.co"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
