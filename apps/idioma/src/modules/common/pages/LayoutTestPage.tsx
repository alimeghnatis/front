/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { Header } from '../components/index.js'

function LayoutTest({ staticContext }: {
  staticContext?:{ status?: number };
}) {
  return (
    <>
      <Header />

      <h1>HELLO</h1>
    </>
  )
}

export default LayoutTest
