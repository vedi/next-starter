import { State } from './reducer';

export const getCounter = (state: State) => state.app.counter;
