import React from 'react'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'

/**
 * Returns the putt attempt results over the course of a round in a line chart
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const ResultsLineChart = (props) => {
  let puttHitCountOvertime = []
  let holeNumList = []
  let puttHitCounter = 0

  // get putt hit count over time
  for (let item of props.puttLog) {
    holeNumList.push(`# ${item.holeNum}`)
    if (item.mode === 'hit') {
      puttHitCounter++
    }
    puttHitCountOvertime.push(puttHitCounter)
  }

  const lineChartData = {
    labels: holeNumList,
    datasets: [
      {
        label: 'Hits Throughout Round',
        fill: true,
        lineTension: 0.1,
        backgroundColor: '#43a047',
        borderColor: '#848484',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#81c784',
        pointBackgroundColor: '#c8e6c9',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#43a047',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: puttHitCountOvertime
      }
    ]
  }

  console.log(lineChartData)
  console.log(Line)

  return (
    <div>
      <Line data={lineChartData} />
    </div>
  )
}

export default ResultsLineChart

ResultsLineChart.propTypes = {
  /** List of submitted putts and putt details */
  puttLog: PropTypes.array
}
