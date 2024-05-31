/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'

import { BoardMembershipsCardGroup } from '../components/index.js'
import Template from '../templates/Primary.js'
import paths from '../paths.js'

function Home({
  wireframe, ...props
}) {
  return (
    <Template title="board home">
      <div className="grid container">
        <BoardMembershipsCardGroup className="md-start-2 md-span-12 span-8" />
      </div>
    </Template>
  )
}

export default Home
