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
      change_count: store.getChangeCount(),
      seat_arrange: store.getSeatArrange()
    }

    store.on('ONCLICK', () => {
      this.setState({ change_count: store.getChangeCount() })
    });

    store.on('CHANGESEAT', () => {
      this.setState({ seat_arrange: store.getSeatArrange() })
    });
  }

  render() {
    return (
      <div>
          <hr />
        <Table parent_state = { {
                                  action : action,
                                  seat_arrange : this.state.seat_arrange
                                } } />
        <Button parent_state = { {
                                  action : action,
                                  change_count : this.state.change_count
                                } } />
      </div>
    );
  }
}

