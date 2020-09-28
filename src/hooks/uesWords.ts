import {useSelector} from 'react-redux';
import {RootState} from '~/modules';

export default function useWords() {
  const words = useSelector((state: RootState) => state.words);
  return words;
}
