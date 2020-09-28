import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {toggleWord, removeWord} from '~/modules/words';
import {Alert} from 'react-native';

export default function useWordActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleWord(id)), [dispatch]);
  const onRemove = useCallback(() => {
    Alert.alert(
      '정말로 삭제하시겠습니까?',
      '다시한번 확인해주세요!',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {text: '삭제', onPress: () => dispatch(removeWord(id))},
      ],
      {cancelable: false},
    );
  }, [dispatch]);

  return {onToggle, onRemove};
}
