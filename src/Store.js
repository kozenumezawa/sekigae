import Emitter from "./EventEmitter"
import firebase from 'firebase'
import 'whatwg-fetch'

export default class Store extends Emitter {
  constructor(dispatcher) {
    super();

    // Firebaseを初期化
    var config = {
      apiKey: "AIzaSyCQArkv-YW4lv52L38yFHmfox_AOo2x2UA",
      authDomain: "sekigae-41d56.firebaseapp.com",
      databaseURL: "https://sekigae-41d56.firebaseio.com",
      storageBucket: "sekigae-41d56.appspot.com",
    };
    firebase.initializeApp(config);

    //  各stateの初期値設定
    this.change_count = 'wait';
    this.seat_arrange = '';

    this.initializeChangeCount();

    this.initializeSeatArrange();

    // this.writeSeatArrange();
    dispatcher.on('onClick', this.onClick.bind(this));
  }

  //----席順関連メソッド----
  initializeSeatArrange() {
    firebase.database().ref('data/seat_arrange').once('value').then( (snapshot) => {
      this.seat_arrange = snapshot.val().table_result;
      this.emit('CHANGESEAT');
    });
    this.monitorSeatArrange();
  }

  monitorSeatArrange() {
    const countRef = firebase.database().ref('data/seat_arrange');
    countRef.on('child_changed', (data) => {
      this.seat_arrange = data.val();
      console.log('change!!')
    });
  }

  writeSeatArrange() {
    //  tamrinAPIのデータをjsonにパース
    fetch('https://treasure-shuffle.herokuapp.com/shuffle')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
      const table_result = json;
      firebase.database().ref('data/seat_arrange/').set({
        table_result
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  getSeatArrange() {
    return this.seat_arrange;
  }
  //----席順関連メソッド終わり----


  //----ボタンクリック関連メソッド----
  initializeChangeCount() {
    firebase.database().ref('data/change_count').once('value').then( (snapshot) => {
      this.change_count = snapshot.val().change_count;
      this.emit('ONCLICK');
    });
    this.monitorChangeCount();
  }

  monitorChangeCount() {
    const countRef = firebase.database().ref('data/');
    countRef.on('child_changed', (data) => {
      this.change_count = data.val().change_count;
      this.emit('ONCLICK');
    });
  }

  onClick() {
    this.change_count++;
    if(this.change_count > 9) {
      this.change_count = 0;
    }
    this.writeClickCount();
    this.emit('ONCLICK');
  }

  getChangeCount() {
    return this.change_count;
  }

  writeClickCount() {
    firebase.database().ref('data/change_count/').set({
      change_count: this.change_count
    });
  }
  //----ボタンクリック関連メソッド終わり----
}