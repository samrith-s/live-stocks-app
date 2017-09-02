import Actions from './actions';

const startListeningToData = () => { return { type: Actions.START_LISTENING }}

const messageReceiver = (message) => { console.log('message-received'); return { type: Actions.MESSAGE_RECEIVED, message: message }}

const pinStock = (stock) => { return { type: Actions.PIN_STOCK, stock }}
const unpinStock = (stock) => { return { type: Actions.UNPIN_STOCK, stock }}

const Creators = {
  startListeningToData,

  messageReceiver,

  pinStock, unpinStock
}

export default Creators;
