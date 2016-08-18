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
          <th>8</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>前</td>
          <td>{seat_arrange.result[0].name}</td>
          <td>{seat_arrange.result[1].name}</td>
          <td>{seat_arrange.result[2].name}</td>
          <td>{seat_arrange.result[3].name}</td>
          <td>{seat_arrange.result[4].name}</td>
          <td>{seat_arrange.result[5].name}</td>
          <td>{seat_arrange.result[6].name}</td>
          <td>{seat_arrange.result[7].name}</td>
        </tr>
        <tr>
          <td>中</td>
          <td>{seat_arrange.result[8].name}</td>
          <td>{seat_arrange.result[9].name}</td>
          <td>--空--</td>
          <td>{seat_arrange.result[10].name}</td>
          <td>{seat_arrange.result[11].name}</td>
          <td>{seat_arrange.result[12].name}</td>
          <td>{seat_arrange.result[13].name}</td>
          <td>{seat_arrange.result[14].name}</td>
        </tr>
        <tr>
          <td>後</td>
          <td>{seat_arrange.result[15].name}</td>
          <td>{seat_arrange.result[16].name}</td>
          <td>{seat_arrange.result[17].name}</td>
          <td>{seat_arrange.result[18].name}</td>
          <td>{seat_arrange.result[19].name}</td>
          <td>{seat_arrange.result[20].name}</td>
          <td>{seat_arrange.result[21].name}</td>
          <td>{seat_arrange.result[22].name}</td>

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
