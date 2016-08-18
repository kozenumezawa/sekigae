import React from 'react'
import { Table } from 'react-bootstrap'

export default class table extends React.Component {
  constructor(props) {
    super(props)

    this.tableInstance = (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
        </tr>
        </thead>
      </Table>
    );
  }

  createTable(seat_arrange){
    console.log(seat_arrange[0].name)
    this.tableInstance = (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>前</td>
          <td>seat_arrange[0].name</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>中</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>後</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </Table>
    )
  }
  //  データベースの表のデータが変化したとき、表の内容を更新する
  componentWillReceiveProps(nextProps) {
    if(nextProps.parent_state.seat_arrange != this.props.parent_state.seat_arrange) {
      this.createTable(nextProps.parent_state.seat_arrange)
    }
  }


  render() {
    return (
      <div>
        {this.tableInstance}
      </div>
    )
  }
}
