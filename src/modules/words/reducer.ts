import {WordsAction, WordsState} from './types';
import {INIT_WORD, ADD_WORD, TOGGLE_WORD, REMOVE_WORD} from './actions';
import AsyncStorage from '@react-native-community/async-storage';

// 초기값 설정
const initialState: WordsState = [
  {id: 1, text: '잠시 되돌아보세요.', done: false},
  {id: 2, text: '친구에게 전화해보세요.', done: false},
  {id: 3, text: '잠을 잡니다.', done: true},
];

function words(
  state: WordsState = initialState,
  action: WordsAction,
): WordsState {
  let newState;
  switch (action.type) {
    case INIT_WORD:
      return [...action.payload];
    case ADD_WORD:
      const nextId = Math.max(...state.map((word) => word.id)) + 1;
      newState = state.concat({
        id: nextId,
        text: action.payload,
        done: false,
      });
      AsyncStorage.setItem('words', JSON.stringify(newState));
      return newState;
    case TOGGLE_WORD:
      newState = state.map((word) =>
        word.id === action.payload ? {...word, done: !word.done} : word,
      );
      AsyncStorage.setItem('words', JSON.stringify(newState));
      return newState;
    case REMOVE_WORD:
      newState = state.filter((word) => word.id !== action.payload);
      AsyncStorage.setItem('words', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
}

export default words;
