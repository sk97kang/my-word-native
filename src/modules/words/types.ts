import {addWord, initWord, removeWord, toggleWord} from './actions';

// Action들의 타입스크립 타입 준비
export type WordsAction =
  | ReturnType<typeof initWord>
  | ReturnType<typeof addWord>
  | ReturnType<typeof toggleWord>
  | ReturnType<typeof removeWord>;

// 상태를 위한 타입 선언
export type Word = {
  id: number;
  text: string;
  done: boolean;
};
export type WordsState = Word[];
