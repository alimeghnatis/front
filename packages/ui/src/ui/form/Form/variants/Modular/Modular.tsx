/* @aztlan/generator-front 0.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useMemo,
} from 'react'

import {
  useForm, FormProvider,
} from 'react-hook-form'
import styleNames from '@aztlan/bem'
// import { useDebug } from '@aztlan/react-hooks'
// @ts-ignore
import type { TFormProps } from '../../types.js'
import { FormPropTypes } from '../../types.js'

import Context from './Context.js'
// import Content from './common/Content.js'

const baseClassName = styleNames.base
const componentClassName = 'form'

/**
 * This is the component description.
 */
function ModularForm({
  id,
  className: userClassName,
  style,
  children,
  items,
  fieldProps: sharedFieldProps,
  loadInitialUrl,
  type: formType = 'default',
  onSubmit,
  ...otherProps
}: TFormProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const methods = useForm({
    mode:'onChange',
    // shouldUseNativeValidation:true,
    ...otherProps,
  })

  // const isDebug = useDebug()

  const contextValue = useMemo(
    () => ({
      sharedFieldProps,
      type:formType,
    }),
    [
      sharedFieldProps,
      formType,
    ],
  )

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        id={id}
        className={[
          baseClassName,
          componentClassName,
          userClassName,
          'grid',
        ]
          .filter((e) => e)
          .join(' ')}
        style={style}
      >
        <Context.Provider value={contextValue}>
          {children}
          {/* isDebug
            && (
            <input
              className="container"
              type="submit"
              value="[DEBUG] console.log"
            />
            ) */}
        </Context.Provider>
      </form>
    </FormProvider>
  )
}

ModularForm.propTypes = FormPropTypes

// Form.Content = Content

export default ModularForm
