import NFC from 'nfc-pcsc';
import { Observable } from 'rxjs';
import * as EventEmitter from 'events'

const emitter = new EventEmitter();

const nfc = new NFC();

nfc.on('reader', (reader: any) => {
  emitter.emit('reader', reader);

  reader.on('card', (card: any) => emitter.emit('card', card.uid));
  reader.on('error', (error: any) => emitter.emit('card-error', error));
  reader.on('end', () => emitter.emit('end'));
});

nfc.on('error', () => emitter.emit('reader-error'));

export default {
  reader: {
    device: Observable.fromEvent(emitter, 'reader'),
    card: Observable.fromEvent(emitter, 'card'),
    error: Observable.fromEvent(emitter, 'error'),
    end: Observable.fromEvent(emitter, 'end'),
  },
  error: Observable.fromEvent(emitter, 'error')
};
