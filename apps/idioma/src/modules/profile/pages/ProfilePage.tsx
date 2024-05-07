/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { ViewerUpdateForm } from '../components/index.js'
import Template from '../../common/templates/Base.js'

function ProfilePage() {
  return (
    <Template title="Profile">
      <div
        className="grid container no-scrollbar"
        style={{ overflow: 'auto' }}
      >
        <div className="span-8 md-span-12">
          <ViewerUpdateForm />
        </div>
      </div>
    </Template>
  )
}

export default ProfilePage
