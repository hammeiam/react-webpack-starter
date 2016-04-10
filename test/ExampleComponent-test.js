import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ExampleComponent from '../src/ExampleComponent'

describe('ExampleComponent', () => {
  const defaultProps = { message: 'foo' }
  const setup = shallowSetup(ExampleComponent, defaultProps)

  it('should render correctly', () => {
    const newProps = { message: 'bar' }
    const {result, renderer, props} = setup(newProps)

    expect(result.type).toBe('div')
    expect(result.props.children.length).toBe(2)

    const text = result.props.children[0]
    expect(text.props.children).toInclude(props.message)
  })
})