import React from 'react'
import { Provider } from 'react-redux'

import { StorybookRouterFix } from './storybook.router.fix'

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    <StorybookRouterFix>
      { children }
    </StorybookRouterFix>
  </Provider>
)

export default ProviderWrapper
