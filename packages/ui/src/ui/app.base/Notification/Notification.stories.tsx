/* @aztlan/generator-front 3.8.0 */
import * as React from 'react'

// import { Meta, StoryObj } from "@storybook/react";
import {
  Meta, StoryFn,
} from '@storybook/react'
import Component from './Provider.js'
import useNotificationContext from './useNotificationContext.js'
import { NotificationGroup } from './common/index.js'

// import { decorators } from 'story-utils'
// import decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'app.base/Notification',
  component:Component,
  /*
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
  argTypes: {
    backgroundColor: { control: "color" }
  }
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

/**
 * Props for the AddNotificationButton component.
 */
interface AddNotificationButtonProps {
  level  :'error' | 'warning' | 'success'; // Type of notification
  content:React.ReactNode; // Message to display in the notification
  ttl?   :number; // Time to live for the <notification></notification>
}

/**
 * A button component that adds a notification on click.
 *
 * @param {AddNotificationButtonProps} props The props for the button component.
 * @returns The button component.
 */
const AddNotificationButton: React.FC<AddNotificationButtonProps> = ({
  level,
  content,
  ttl,
}) => {
  const { notify } = useNotificationContext()

  const handleClick = () => {
    if (level === 'error') {
      notify.error(
        content, ttl,
      )
    } else if (level === 'warning') {
      notify.warning(
        content, ttl,
      )
    } else if (level === 'success') {
      notify.success(
        content, ttl,
      )
    }
  }

  return (
    <button
      onClick={handleClick}
      type="button"
    >
      Add
      {' '}
      {level.charAt(0).toUpperCase() + level.slice(1)}
      {' '}
      Notification
      {typeof ttl !== 'undefined' && ` (ttl: ${ttl})`}
    </button>
  )
}

const Template: StoryFn<typeof Component> = (args) => <Component {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:(
    <>
      <div key="actions">
        <AddNotificationButton
          level="error"
          content={<span>Please fill all the required fields.</span>}
        />
        <AddNotificationButton
          level="warning"
          content={<span>This feature will soon be deprecated.</span>}
        />
        <AddNotificationButton
          level="success"
          content={<span>Everything went well.</span>}
        />
        <AddNotificationButton
          level="success"
          ttl={Number(0)}
          content={(
            <span>
              Everything went well. This notification should not disappear.
            </span>
          )}
        />
      </div>
      <NotificationGroup displayRemainingTime />
    </>
  ),
}
