import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useCounterState } from '../hooks/count.hook'

type CounterContextType = {
  count: number
  increment: () => void
  decrement: () => void
}

const CounterContext = createContext({} as CounterContextType)

export const useCounter = () => {
  return useContext(CounterContext)
}

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const { count, decrement, increment } = useCounterState()

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}
