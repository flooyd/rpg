import { readable, writable } from 'svelte/store';
import {default as m} from '../Dialog/messages';
import {default as e} from '../Events/index';

export const inGame = writable(false);
export const currentSaga = writable('Prologue');
export const currentChapter = writable('desert');
export const messages  = readable(m);

export const characterIndex = writable(0);
export const events: any = writable({})
export const tileInfo = writable('');
export const areaInfo = writable('A mysterious, windy, desert area with confused, goggle wearing people.');

//admin
export const currentField = writable('');
export const currentType = writable('');