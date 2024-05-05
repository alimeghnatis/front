/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import Template from '../layer/Main.js'
import { Chat } from '../components/index.js'
import { useBoardContext } from '../../common/components/index.js'

function ChatPage() {
  const { data } = useBoardContext()
  return <Chat data={data} />
}

export default ChatPage
