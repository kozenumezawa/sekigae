import React from 'react'

import Table from './table.js'
import Button from './buttons/button.js'

export default class main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radio : "a",
      text : ""
    }
    
  }

  render() {
    return (
      <div>

          <hr />

        <Table />
        <Button />
      </div>
    );
  }
}

