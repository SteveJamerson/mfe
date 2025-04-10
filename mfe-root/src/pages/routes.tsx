import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import App from '../App'
import { App19 } from '../components/mfes/App19'
import { App17 } from '../components/mfes/App17'

export const RoutesPages = () => {
  return (
    <Suspense fallback={<div>Loading MFE...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/19" element={<App19 />} />
        <Route path="/17" element={<App17 />} />
      </Routes>
    </Suspense>
  )
}
