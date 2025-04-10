import React, { FunctionComponent } from 'react'
import { CounterProvider, useCounter } from './contexts/count.context'
import Counter from './components/count'

const App: FunctionComponent = () => {
  return (
    <CounterProvider>
      <h2>Microfrontend Application Version 17 </h2>
      <Counter />
    </CounterProvider>
  )
}

export default App
