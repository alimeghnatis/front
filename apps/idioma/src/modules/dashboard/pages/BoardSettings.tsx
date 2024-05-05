/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Template from '../layer/Main.js'
import { BoardUpdateForm } from '../components/index.js'

import { useBoardContext } from '../../common/components/index.js'

function BoardSettings() {
  const { data } = useBoardContext()
  return (
    <div
      className="grid container"
      style={{ overflow: 'auto' }}
    >
      <h1>BoardSettings </h1>
      <BoardUpdateForm data={data} />
    </div>
  )
}

export default BoardSettings
