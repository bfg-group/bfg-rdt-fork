import React, {Component} from 'react'
import {render} from 'react-dom'

import DateTime from '../../src'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>bfg-rdt-fork Demo</h1>
      <DateTime />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
