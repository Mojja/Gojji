import React from 'react'
import PropTypes from 'prop-types'

import Field from 'components/Field'

const TextArea = props => <Field {...props} component="textarea" />

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
}

TextArea.defaultProps = {
  placeholder: '',
  type: 'text',
  readOnly: false,
  required: false,
  rows: 5,
}

export default TextArea
