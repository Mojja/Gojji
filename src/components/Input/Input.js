import React from 'react'
import PropTypes from 'prop-types'

import Field from 'components/Field'

const Input = props => <Field {...props} component="input" />

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  readOnly: false,
  required: false,
}

export default Input
