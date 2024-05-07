/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useBoardContext } from 'modules/common/components'
import Template from 'modules/common/templates/Secondary'
import { BoardUpdateForm } from '../components/index.js'

function BoardSettings() {
  const { data } = useBoardContext()
  return (
    <Template title="Board Settings">
      <section
        className="no-scrollbar"
        style={{ overflow: 'auto' }}
      >
        <BoardUpdateForm data={data} />
      </section>
    </Template>
  )
}

export default BoardSettings
