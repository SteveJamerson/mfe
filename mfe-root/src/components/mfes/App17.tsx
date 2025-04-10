import React, { lazy, Suspense } from 'react'

const MfeApp17 = lazy(() =>
  import('mfeAppV17/App').catch(() => {
    console.error('Falha ao carregar o microfrontend.')
    return { default: () => <div>Erro ao carregar o componente.</div> }
  }),
)

export const App17 = () => {
  return (
    <Suspense fallback={<div>Loading MFE...</div>}>
      <MfeApp17 />
    </Suspense>
  )
}
