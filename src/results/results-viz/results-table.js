import React from 'react'
import { Table, TableBody, TableHead } from 'mdbreact'
import PropTypes from 'prop-types'

/**
 * Returns the results data table
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const ResultsTable = (props) => {
  let puttDataList = props.puttLog.map(putt => {
    return (
      <tr key={putt.holeNum}>
        <td>{putt.holeNum}</td>
        <td>{putt.mode}</td>
        <td>{putt.shapeYPosition}, {putt.shapeXPosition}</td>
        <td>{putt.activeMetaTags.join(', ')}</td>
      </tr>
    )
  })

  return (
    <div className='row my-1 d-flex justify-content-center'>
      <div className='col-lg-6  col-md-8 col-sm-12'>
        <Table className='data-table' small striped hover responsive>
          <TableHead>
            <tr>
              <th>#</th>
              <th>Attempt</th>
              <th>Position</th>
              <th>Tags</th>
            </tr>
          </TableHead>
          <TableBody>
            {puttDataList}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ResultsTable

ResultsTable.propTypes = {
  /** List of submitted putts and putt details */
  puttLog: PropTypes.array
}
