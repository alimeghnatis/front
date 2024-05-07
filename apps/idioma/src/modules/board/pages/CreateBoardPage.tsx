/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import Template from '../templates/Primary'
import { BoardCreateForm } from '../components/index.js'

function NewBoard() {
  return (
    <Template>
      <div
        className="grid container no-scrollbar"
        style={{ overflow: 'auto' }}
      >
        <div className="span-8 md-span-12">
          <BoardCreateForm />
        </div>
      </div>
    </Template>
  )
}

export default NewBoard
