/* @aztlan/generator-front 3.4.7 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './MobilePopup.js'
// import decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";

const meta: Meta<typeof Component> = {
  title     :'common/MobilePopup',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
  /*
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
  argTypes: {
    backgroundColor: { control: "color" }
  } */
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    title   :'Details about something',
    children:'Sample MobilePopup',
    fixed   :true,
  },
}

export const CloseContent: StoryObj<typeof Component> = {
  args:{
    title       :'Details about something',
    children    :'Sample MobilePopup',
    closeContent:'X',
    fixed       :true,
  },
}

export const Overflow: StoryObj<typeof Component> = {
  args:{
    title   :'Details about something',
    fixed   :true,
    children:(
      <>
        <p className="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          odio at eros volutpat commodo at eu sem. Phasellus sodales metus non
          sapien malesuada, non mollis augue eleifend. Fusce et ligula
          malesuada, finibus est sed, facilisis lorem. In faucibus, nibh eu
          congue iaculis, lacus metus porta sem, ac luctus tellus enim ac ante.
          Etiam consequat sapien vitae nisi congue fringilla. Praesent bibendum
          rutrum tincidunt. Nullam scelerisque velit tortor, eleifend dapibus
          nunc vestibulum at. Nulla id ipsum sed nisl tristique interdum.
          Suspendisse fringilla rhoncus odio vehicula congue. Sed elementum elit
          nec aliquet accumsan.
        </p>
        <p className="container">
          Cras fringilla non nulla nec laoreet. Praesent pellentesque eu ligula
          vel mollis. Etiam vel mi porta, vestibulum ligula sed, posuere sem.
          Aliquam at orci nec nunc condimentum feugiat non eu erat. Vestibulum
          sapien nibh, faucibus nec convallis ac, imperdiet sit amet ligula. Sed
          leo risus, fringilla sed faucibus at, pellentesque facilisis arcu.
          Fusce a tellus eu felis bibendum vehicula sed in lectus. Aenean
          viverra convallis ante, non condimentum justo finibus ac.
        </p>
        <p className="container">
          Cras fringilla non nulla nec laoreet. Praesent pellentesque eu ligula
          vel mollis. Etiam vel mi porta, vestibulum ligula sed, posuere sem.
          Aliquam at orci nec nunc condimentum feugiat non eu erat. Vestibulum
          sapien nibh, faucibus nec convallis ac, imperdiet sit amet ligula. Sed
          leo risus, fringilla sed faucibus at, pellentesque facilisis arcu.
          Fusce a tellus eu felis bibendum vehicula sed in lectus. Aenean
          viverra convallis ante, non condimentum justo finibus ac.
        </p>
        <p className="container">
          Curabitur scelerisque nibh mi, vitae hendrerit nulla imperdiet eu.
          Fusce magna est, tempus mollis congue quis, mattis at justo.
          Suspendisse quis imperdiet nulla, eu maximus diam. Integer ultricies
          ipsum eros, eu pharetra metus rutrum id. Phasellus bibendum fringilla
          placerat. In at dolor eu sapien efficitur pretium. Sed aliquam augue
          quis tempor volutpat. Nulla sapien ligula, cursus non efficitur ac,
          iaculis nec lacus. Integer bibendum aliquet consectetur. Cras et erat
          quis tortor venenatis efficitur. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.
        </p>
      </>
    ),
    closeContent:'X',
  },
}
