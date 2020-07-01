import React from 'react'
import renderer from 'react-test-renderer'
import { Ellipsis } from '.'

test('Component renders correctly', () => {
  const component = renderer.create(<Ellipsis />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
