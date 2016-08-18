import React from 'react'
import { Button } from 'react-bootstrap'

export default class button extends React.Component {
  constructor(props) {
    super(props)

    this.buttonInstance = (
      <Button bsStyle="primary">変えたい</Button>
    );
  }

  render() {
    return (
      <div>
        {this.buttonInstance}
      </div>
    )
  }
}
