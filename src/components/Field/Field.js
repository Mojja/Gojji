import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Flex from 'components/Flex'
import styles from './Field.scss'

const Field = ({
  component,
  label,
  onChange,
  containerStyles,
  labelStyles,
  inputStyles,
  ...props
}) => (
  <Flex className={cx(styles.Field, { [containerStyles]: Boolean(containerStyles) })} column>
    {Boolean(label) && <label className={labelStyles}>{label}</label>}
    {createElement(component, {
      className: cx(styles.field, { [inputStyles]: Boolean(inputStyles) }),
      onChange: ({ target: { value } }) => onChange(value),
      ...props,
    })}
  </Flex>
)

Field.propTypes = {
  component: PropTypes.oneOf(['input', 'textarea']),
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  containerStyles: PropTypes.string,
  labelStyles: PropTypes.string,
  inputStyles: PropTypes.string,
}

Field.defaultProps = {
  component: 'input',
}

export default Field
