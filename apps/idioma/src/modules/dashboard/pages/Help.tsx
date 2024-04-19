/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import {
  useEffect, useState,
} from 'react'
import { Link } from 'react-router-dom'
import Template from '../layer/Main.js'
import Content from './Help.mdx'

function Help() {
  return (
    <div style={{ overflow: 'auto' }}>
      <h1>Help</h1>
      <Content />
    </div>
  )
}

export default Help
