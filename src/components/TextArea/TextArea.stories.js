import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TextArea from './TextArea'

storiesOf('TextArea', module).add('default', () => (
  <TextArea label="label" placeholder="bonsoir" value="" onChange={action('onChange')} required />
))
