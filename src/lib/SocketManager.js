import { Observable } from 'rxjs/Observable';
import Config from './Config';

let instance = null;

export default class SocketManager {
  socket = null;

  constructor(testSocket) {
    if(!instance) {
      instance = this;
      this._connect();
    }

    return instance;
  }

  _connect() {
    this.socket = new WebSocket(Config.socketDomain);
    this.socket.onopen = () => { console.log('connected') }
    this.socket.onclose = () => {
      console.log('disconnected');
      this.socket = null;
      setTimeout(() => this._connect(), Config.retryTimeout)
    }
  }

  _disconnect() {
    this.socket.close();
  }

  listenToSocket() {
    return Observable.create(observer =>
      this.socket.onmessage = data => observer.next(data)
    )
  }
}
