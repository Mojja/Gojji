import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Table.scss'

/**
 * @Component Table
 * @props (data) {Array} data to generate <table>.
 * @props (data) example:
 * data = [
 *   { title: 'lorem', label: 'ipsum', count: 0 },
 *   { title: 'lorem', label: 'ipsum', count: 0 },
 *   { title: 'lorem', label: 'ipsum', count: 0 },
 * ]
 */

const Table = ({ data, className, theadClassName, tbodyClassName }) => (
  <table className={cx(styles.Table, { [className]: Boolean(className) })}>
    <thead>
      <tr>
        {/* Display the first object keys on top of each columns */}
        {Object.keys(data[0]).map((el, index) => (
          <th key={index} className={cx({ [theadClassName]: Boolean(theadClassName) })}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((line, index) => (
        <tr key={index}>
          {line.map((el, index) => (
            <td key={index} className={cx({ [tbodyClassName]: Boolean(tbodyClassName) })}>
              {el}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  theadClassName: PropTypes.string,
  tbodyClassName: PropTypes.string,
}

export default Table
