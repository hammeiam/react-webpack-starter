/*
 * Test Setup:
 * - Creates window and document globals need to render components
 * - exposes #shallowSetup helper
*/

import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils'
import React from 'react'


const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.shallowSetup = function(Component, defaultProps) {
  /*
  * A curried function used to set up test components.
  *
  * For each test file, do:
  *   const setup = shallowSetup(React_Component, defaultProps)
  *
  * Call this.setup in each test to pass unique props to your tested component, eg:
  *   const { result, renderer, props } = setup(testSpecificProps)
  */

  return function(userProps){
    let finalProps = Object.assign({}, defaultProps, userProps)
    let renderer = TestUtils.createRenderer()
    renderer.render(<Component {...finalProps} />)
    let result = renderer.getRenderOutput()

    return {
      result,
      renderer,
      props: finalProps
    }
  }
}