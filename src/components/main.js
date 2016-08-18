import React from 'react'
import 'whatwg-fetch'

import Table from './table.js'

export default class main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radio : "a",
      text : ""
    }

    //  tamrinAPIのデータをjsonにパース
    fetch('https://treasure-shuffle.herokuapp.com/shuffle')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
      const table_result = json;



    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })

  }


  render() {
    return (
      <div>
          <label>value a</label>
          <input type="radio" name="aradio" value="A" checked={this.state.radio === 'a'}
                 onChange={() => this.setState({radio: 'a'})}/> <br />
          <label>value b</label>
          <input type="radio" name="aradio" value="B" checked={this.state.radio === 'b'}
                 onChange={() => this.setState({radio: 'b'})}/>
          <hr />

        <Table />
      </div>
    );
  }
}

