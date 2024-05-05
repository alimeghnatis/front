/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { ViewerUpdateForm } from '../components/index.js'
import Template from '../../common/templates/Base.js'

function ProfilePage() {
  return (
    <Template title="Profile">
      <h1>Panel profile</h1>
      <ViewerUpdateForm />
    </Template>
  )
}

export default ProfilePage
