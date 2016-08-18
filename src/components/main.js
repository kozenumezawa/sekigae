import React from 'react'

import Table from './table.js'
import Button from './buttons/button.js'

import Action from '../Action'
import Store from '../Store'
import EventEmitter from '../EventEmitter'

var dispatcher = new EventEmitter();
var action = new Action(dispatcher);
var store = new Store(dispatcher);

export default class main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      change_count: 0
    }

    store.on('ONCLICK', () => {
      this.setState({ change_count: store.getChangeCount() })
    });
  }

  render() {
    return (
      <div>

          <hr />

        <Table />
        <Button parent_state = { {
                                  action : action,
                                  change_count : this.state.change_count
                                } } />
      </div>
    );
  }
}

