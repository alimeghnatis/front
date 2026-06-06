/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import Template from '../templates/Primary'
import { BoardCreateForm } from '../components/index.js'

function NewBoard() {
  return (
    <Template
      mobileTitle={<p className="h3 hide-desktop">Create a new board</p>}
    >
      <section
        className="no-scrollbar"
        style={{ overflow: 'auto' }}
      >
        <BoardCreateForm />
      </section>
    </Template>
  )
}

export default NewBoard
