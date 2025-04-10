import React, { FunctionComponent } from 'react'
import { App17 } from './components/mfes/App17'
import { App19 } from './components/mfes/App19'

const App: FunctionComponent = () => {
  return (
    <div>
      <h1>Root Application</h1>
      <App19 />
      <App17 />
    </div>
  )
}

export default App
