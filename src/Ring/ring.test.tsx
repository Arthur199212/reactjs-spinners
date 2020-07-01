import React from 'react'
import renderer from 'react-test-renderer'
import { Ring } from '.'

test('Component renders correctly', () => {
  const component = renderer.create(<Ring />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
