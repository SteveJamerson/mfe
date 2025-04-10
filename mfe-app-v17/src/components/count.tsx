import React, { FunctionComponent } from 'react'
import { useCounter } from '../contexts/count.context'

const Counter: FunctionComponent = () => {
  const { count, increment, decrement } = useCounter()

  return (
    <>
      <p>Valor atual: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </>
  )
}

export default Counter
