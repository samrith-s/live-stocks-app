import Actions from './actions';

const startListeningToData = () => { return { type: Actions.START_LISTENING }}
const messageReceiver = (message) => { console.log('message-received'); return { type: Actions.MESSAGE_RECEIVED, message: message }}

const Creators = {
  startListeningToData,
  messageReceiver
}

export default Creators;
