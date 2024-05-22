/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import {
  useState, useMemo, useInsertionEffect,
  useEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFormContext,
  useWatch,
} from 'react-hook-form'
import styleNames from '@aztlan/bem'
import {
  withWrapper,
  fieldPropTypes,
  useOptionAriaProps,
  Selector,
} from '@aztlan/ui'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

// Local Definitions

const baseClassName = styleNames.base
const componentClassName = 'lang-choices'

function Option({
  name,
  value,
  label,
  disabled,
  type,
  register,
  registerProps,
  audio,
  hidden,
  pt1,
  pt2t,
  // ...otherProps
}) {
  const ariaProps = useOptionAriaProps(
    name, value,
  )
  return (
    <div
      className="option"
      className={[
        'option',
        hidden && 'hidden',
        pt1.length && 'common-language',
        audio && 'has-audio',
        !audio && !pt1.length && 'less-common',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        value={value}
        disabled={disabled || false}
        type={type}
        {...register(
          name, registerProps,
        )}
        {...ariaProps.input}
      />
      <label {...ariaProps.label}>
        {label}
        /
        { pt1?.length ? pt1 : pt2t }
        {audio && ('/A')}
      </label>
    </div>
  )
}

Option.propTypes = {
  name    :PropTypes.string,
  value   :PropTypes.string,
  label   :PropTypes.string,
  disabled:PropTypes.bool,
  type    :PropTypes.oneOf([
    'checkbox',
    'radio',
  ]),
  register     :PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  registerProps:PropTypes.object,
  audio        :PropTypes.bool,
  hidden       :PropTypes.bool,
}

function Filters({
  filters, selectedFilter, setSelectedFilter,
}) {
  return (
    <div className="filters">
      {/* Object.keys(filters).map((key) => (
        <>
          <input
            type="radio"
            id={`language-filter-${key}`}
            name="language-filter"
            onChange={() => setSelectedFilter(filters[key])}
            checked={selectedFilter.name === filters[key].name}
            disabled={filters[key].disabled}
            value={key}
          />
          <label
            key={key}
            htmlFor={`language-filter-${key}`}
            className={filters[key].className}
          >
            {filters[key].name}
          </label>
        </>

    )) */}
      <span>
        Show :
        &nbsp;
      </span>
      <Selector
        options={Object.keys(filters).map((key) => ({
          value   :filters[key],
          label   :filters[key].label,
          disabled:filters[key].disabled,
        }))}
        value={selectedFilter}
        setValue={setSelectedFilter}
      />

    </div>

  )
}

Filters.propTypes = {
  filters          :PropTypes.object,
  selectedFilter   :PropTypes.object,
  setSelectedFilter:PropTypes.func,
}

const MemoFilters = React.memo(
  Filters,
  (
    prevProps, nextProps,
  ) => prevProps.selectedFilter.label === nextProps.selectedFilter.label,
)

/**
 * This is the component description.
 */
function LanguageChoices({
  name,
  className: userClassName,
  style,
  multiple = true,
  disabled,
  options,
  registerProps,
  initialFilter = 'selected',
  initialFilterIfEmpty = 'audio',
  optionsColumns = 2,
  optionsColumnsDesktop = 3,
}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()

  const type = multiple ? 'checkbox' : 'radio'

  const { [name]:currentValues } = useWatch(name) || []

  const filters = useMemo(
    () => ({
      selected:{
        name     :'selected',
        className:'selected-only',
        label    :'Selected Only',
        filter   :(option) => currentValues.includes(option.value),
        disabled :!(currentValues.length > 0),
      },
      audio:{
        name     :'audio',
        className:'has-audio',
        label    :'+audio',
        filter   :(option) => option.audio,
      },
      common:{
        name     :'common',
        className:'common-language',
        label    :'+common',
        filter   :(option) => option.pt1?.length,
      },
      rare:{
        name     :'rare',
        className:'less-common',
        label    :'+all',
        filter   :(option) => true,
      //
      },
    }), [currentValues],
  )

  const initialFilterName = currentValues.length ? initialFilter : initialFilterIfEmpty

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState(filters[initialFilterName])

  useEffect(
    () => {
      if (
        !currentValues.length
        && selectedFilter.className === 'selected-only'
      ) {
        setSelectedFilter(filters[initialFilterIfEmpty])
      }
    }, [
      currentValues,
      selectedFilter,
      filters,
      initialFilter,
    ],
  )

  return (
    <fieldset
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={{
        '--options-columns'        :optionsColumns,
        '--options-columns-desktop':optionsColumnsDesktop,
        ...style,
      }}
    >
      <Filters
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div className="options">
        { options.map((option) => (
          <Option

            key={option.value}
            value={option.value}
            label={option.label}
            disabled={disabled || option.disabled}
            audio={option.audio}
            pt1={option.pt1}
            pt2t={option.pt2t}
            type={type}
            register={register}
            registerProps={registerProps}
            name={name}
            hidden={
              (!selectedFilter.filter(option) && !currentValues.includes(option.value)) || (
                selectedFilter.className === 'selected-only' && !currentValues.includes(option.value)
              )
            }
          />
        ))}
      </div>

    </fieldset>
  )
}

LanguageChoices.propTypes = propTypes

export default withWrapper(
  LanguageChoices, {
    mockLabel          :true,
    descriptionPosition:'top',
  },
)
