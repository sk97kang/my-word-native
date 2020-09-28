import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {initWord} from '~/modules/words';

export default function useInit() {
  const dispatch = useDispatch();
  return useCallback((words) => dispatch(initWord(words)), [dispatch]);
}
