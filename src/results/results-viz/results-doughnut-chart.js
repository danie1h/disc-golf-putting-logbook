import React, { Component } from 'react'
import { Chart } from 'react-chartjs-2'
import PropTypes from 'prop-types'

/**
 * Returns the putt attempt results in a doughnut chart
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
class ResultsDoughnutChart extends Component {
  componentDidMount () {
    let hitCount = 0
    let missCount = 0

    for (let item of this.props.puttAttempts) {
      (item === 'hit') ? hitCount++ : missCount++
    }

    const canvasElement2d = document.getElementById('results-doughnut-chart').getContext('2d')
    const doughnutChart = new Chart(canvasElement2d, {
      type: 'doughnut',
      data: {
        labels: ['Hit', 'Miss'],
        datasets: [
          {
            data: [hitCount, missCount],
            backgroundColor: ['#43a047', '#F7464A'],
            hoverBackgroundColor: ['#66bb6a', '#FF5A5E']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }

  render () {
    return (
      <div>
        <canvas id='results-doughnut-chart' />
      </div>
    )
  }
}

export default ResultsDoughnutChart

ResultsDoughnutChart.propTypes = {
  /** List of submitted putts and putt details */
  puttAttempts: PropTypes.array
}
