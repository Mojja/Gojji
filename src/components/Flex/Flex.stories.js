import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Flex from './Flex'

storiesOf('Flex', module).add('with debug', () => (
  <Flex center debug>
    <Flex style={{ borderColor: 'green', width: 42, height: 42 }} debug />
    <Flex column debug>
      <Flex style={{ borderColor: 'pink', width: 42, height: 42 }} debug />
      <Flex style={{ borderColor: 'blue', width: 42, height: 42 }} debug />
    </Flex>
    <Flex style={{ borderColor: 'orange', width: 42, height: 42 }} debug />
  </Flex>
))
