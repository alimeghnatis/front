/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import {
  useEffect, useState,
} from 'react'
import { Link } from 'react-router-dom'
import Template from 'modules/common/templates/Secondary'
import Content from './HelpPage.mdx'

function HelpPage() {
  return (
    <Template title="Help">
      <div style={{ overflow: 'auto' }}>
        <h1>Help</h1>
        <Content />
      </div>
    </Template>
  )
}

export default HelpPage
