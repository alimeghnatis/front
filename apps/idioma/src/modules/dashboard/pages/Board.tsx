/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  graphql, useMutation,
} from 'react-relay'
import Template from '../layer/Main.js'
import {
  useBoardContext, AdditionForm,
} from '../components/index.js'

/*
const FRAGMENT = graphql`
  fragment BoardDashboardFragment on UserNode {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
` */

function Board() {
  const { data } = useBoardContext()

  return (
    <>
      <AdditionForm />
      <h1>Board </h1>
      <pre
        style={{
          whiteSpace:'pre-wrap',
          wordWrap  :'break-word',
        }}
      >
        {JSON.stringify(
          data, null, 2,
        )}
      </pre>
    </>
  )
}

export default Board
