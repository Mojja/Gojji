import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from './Input'

storiesOf('Input', module).add('default', () => (
  <Input label="label" placeholder="bonsoir" value="" onChange={action('onChange')} required />
))
