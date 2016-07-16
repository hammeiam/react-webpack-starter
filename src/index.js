import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import ExampleComponent from './ExampleComponent';
import { AppContainer } from 'react-hot-loader';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
      <ExampleComponent />
    </AppContainer>,
    document.getElementById('app')
  );

  if (module.hot) {
    // https://github.com/gaearon/redux-devtools/commit/64f58b7010a1b2a71ad16716eb37ac1031f93915
    module.hot.accept('./ExampleComponent', () => {
      const NextComponent = require('./ExampleComponent').default;
      render(
        <AppContainer>
          <NextComponent />
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
});
