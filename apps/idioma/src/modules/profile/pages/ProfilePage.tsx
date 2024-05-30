/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { ViewerUpdateForm } from '../components/index.js'
import Template from '../../common/templates/Base.js'

function ProfilePage() {
  return (
    <Template>
      <section
        className="no-scrollbar"
        style={{ overflow: 'auto' }}
      >
        <ViewerUpdateForm />
      </section>
    </Template>
  )
}

export default ProfilePage
