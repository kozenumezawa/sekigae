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
              <a href="#">異議が唱えられる席替え -Treasure2016-</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );

  }
}
