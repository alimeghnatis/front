/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import Template from '../layer/Main.js'
import { BoardCreateForm } from '../components/index.js'

function NewBoard() {
  return (
    <div
      className="grid container"
      style={{ overflow: 'auto' }}
    >
      <h1>New board</h1>
      <BoardCreateForm />
    </div>
  )
}

export default NewBoard
