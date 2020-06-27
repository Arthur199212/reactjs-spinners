import React from 'react'
import renderer from 'react-test-renderer'
import HelloComponent from '../'

test("Component should show text 'Hello World'", () => {
  const component = renderer.create(<HelloComponent text="World" />)
  const testInstance = component.root

  expect(testInstance.findByType(HelloComponent).props.text).toBe('World')

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
