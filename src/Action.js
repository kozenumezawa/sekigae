export default class Action {
   constructor(dispatcher) {
     this.dispatcher = dispatcher;
   }

  onClick() {
    this.dispatcher.emit('onClick');
  }
}