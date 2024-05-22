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
import type { ModularFormProps } from './types.js'
import { ModularFormPropTypes } from './types.js'
import {
  Section, SubmitBar,
} from './common/index.js'

import Context from './Context.js'
// import Content from './common/Content.js'

const baseClassName = styleNames.base
const componentClassName = 'modular-form'

/**
 * This is the component description.
 */
function ModularForm({
  id,
  className: userClassName,
  style,
  children,
  fieldProps: sharedFieldProps,
  onSubmit,
  submitSpan = 2,
  submitSpanDesktop = 3,
  ...otherProps
}: ModularFormProps): React.ReactElement {
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
    () => ({ sharedFieldProps }),
    [sharedFieldProps],
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
        ]
          .filter((e) => e)
          .join(' ')}
        style={{
          ...style,
          '--submit-span'        :submitSpan,
          '--submit-span-desktop':submitSpanDesktop,
        } as React.CSSProperties}
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

ModularForm.propTypes = ModularFormPropTypes

ModularForm.Section = Section
ModularForm.SubmitBar = SubmitBar

export default ModularForm
