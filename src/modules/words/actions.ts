import {WordsState} from './types';

// Action type
export const ADD_WORD = 'words/ADD_WORD' as const;
export const TOGGLE_WORD = 'words/TOGGLE_WORD' as const;
export const REMOVE_WORD = 'words/REMOVE_WORD' as const;
export const INIT_WORD = 'words/INIT_WORD' as const;

// Action 생성 함수
export const addWord = (text: string) => ({
  type: ADD_WORD,
  payload: text,
});

export const toggleWord = (id: number) => ({
  type: TOGGLE_WORD,
  payload: id,
});

export const removeWord = (id: number) => ({
  type: REMOVE_WORD,
  payload: id,
});

export const initWord = (words: WordsState) => ({
  type: INIT_WORD,
  payload: words,
});
