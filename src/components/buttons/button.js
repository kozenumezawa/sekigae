import React from 'react'
import { Button } from 'react-bootstrap'

export default class button extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  //  ボタンが押されたときの処理
  onClick() {
    this.props.parent_state.action.onClick();
  }

  render() {
    const count = this.props.parent_state.change_count;
    return (
      <div>
        <Button bsStyle="primary"  onClick={this.onClick} >変えたい--{count}票</Button>
        (10票以上で再席替え)
      </div>
    )
  }
}
