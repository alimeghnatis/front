import * as React from 'react'
import { SecondaryHeader } from '../components/index.js'

function Secondary({
  title, children,
}) {
  return (
    <main className="flex">
      <div>
        <SecondaryHeader leftSpanDesktop={2}>{title}</SecondaryHeader>
      </div>
      {children}
    </main>
  )
}

export default Secondary
