import React, { lazy, Suspense } from 'react'

const MfeApp19 = lazy(() =>
  import('mfeAppV19/App').catch(() => {
    console.error('Falha ao carregar o microfrontend.')
    return { default: () => <div>Erro ao carregar o componente.</div> }
  }),
)

export const App19 = () => {
  return (
    <Suspense fallback={<div>Loading MFE...</div>}>
      <MfeApp19 />
    </Suspense>
  )
}
