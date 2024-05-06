import * as React from 'react'
import { SecondaryHeader } from '../components/index.js'

function Secondary({
  title, children,
}) {
  return (
    <>
      <SecondaryHeader leftSpanDesktop={2}>{title}</SecondaryHeader>
      {children}
    </>
  )
}

export default Secondary
