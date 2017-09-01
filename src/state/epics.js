import Actions from './actions';
import Creators from './creators';

export const startListeningToData = (action$, store, { Socket }) => {
  return action$.ofType(Actions.START_LISTENING)
    .flatMap(() => Socket.listenToSocket())
    .map((data) => {
      return Creators.messageReceiver(data.data);
    });
}
