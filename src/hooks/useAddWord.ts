import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {addWord} from '~/modules/words';

export default function useAddWord() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addWord(text)), [dispatch]);
}
