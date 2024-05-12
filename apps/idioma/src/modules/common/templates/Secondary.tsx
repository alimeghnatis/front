import * as React from 'react'
import { NotificationGroup } from '@aztlan/ui'
import { SecondaryHeader } from '../components/index.js'

function Secondary({
  title, children, absoluteHeaderElements,
}) {
  return (
    <main className="flex">
      <div>
        <SecondaryHeader leftSpanDesktop={2}>{title}</SecondaryHeader>
        <div className="abs-special span-6 md-span-4 manual ">
          {absoluteHeaderElements}
          <NotificationGroup />
        </div>
      </div>
      {children}
    </main>
  )
}

export default Secondary
