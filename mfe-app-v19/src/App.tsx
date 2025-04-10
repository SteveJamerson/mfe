import React, { FunctionComponent } from 'react'
import Counter from './components/count'
import { CounterProvider } from './contexts/count.context'

const App: FunctionComponent = () => {
  return (
    <CounterProvider>
      <h2>Microfrontend Application Version 19</h2>
      <Counter />
    </CounterProvider>
  )
}

export default App
