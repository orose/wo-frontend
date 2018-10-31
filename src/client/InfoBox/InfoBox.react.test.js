import React from 'react';
import InfoBox from './index';
import renderer from 'react-test-renderer';

test('Test that InfoBox renders as expected', () => {
  const component = renderer.create(
    <InfoBox title="the title" text="the text" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
