/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import {
  useEffect, useState,
} from 'react'
import { Link } from 'react-router-dom'
import Content from './HelpPage.mdx'
import SecondaryTemplate from '../../common/templates/Secondary.js'

function HelpPage() {
  return (
    <SecondaryTemplate title="Help">
      <div style={{ overflow: 'auto' }}>
        <h1>Help</h1>
        <Content />
      </div>
    </SecondaryTemplate>
  )
}

export default HelpPage
