import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import PuttingLogApp from './PuttingLogApp'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import * as serviceWorker from './serviceWorker'

/** Source of putting meta tags for user to select on each putt logged */
const metaTagsList = ['downhill', 'uphill', 'headwind', 'tailwind', 'left to right wind', 'right to left wind', 'bullseye', 'c1', 'c2', 'outside c2', 'spit out', 'cut-through', 'straddle', 'jump putt', 'turbo', 'skip-in', 'forehand', 'backhand', 'hyzer', 'anhyzer']

ReactDOM.render(<PuttingLogApp metaTagsList={metaTagsList} />, document.getElementById('root'))

serviceWorker.unregister()
