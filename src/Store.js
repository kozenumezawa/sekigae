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

    //  tamrinAPIのデータをjsonにパース
    fetch('https://treasure-shuffle.herokuapp.com/shuffle')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
      const table_result = json;
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })


    //  各stateの初期値設定
    this.change_count = 0;

    dispatcher.on('onClick', this.onClick.bind(this));
  }

  onClick() {
    this.change_count++;
    if(this.change_count > 4) {
      this.change_count = 0;
    }
    this.writeClickCount();
    this.emit('ONCLICK');
  }

  getChangeCount() {
    return this.change_count;
  }

  writeClickCount() {
    firebase.database().ref('change_count/').set({
      change_count: this.change_count
    });
  }
}