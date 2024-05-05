import * as React from 'react'
import { SecondaryHeader } from '../components/index.js'

function Secondary({
  title, children,
}) {
  return (
    <>
      <SecondaryHeader>{title}</SecondaryHeader>
      {children}
    </>
  )
}

export default Secondary
