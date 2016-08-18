import React from 'react'

import { Navbar } from 'react-bootstrap'

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">異議あり席替え -Treasure2016-</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

          </Navbar.Collapse>
        </Navbar>
      </div>
    );

  }
}
