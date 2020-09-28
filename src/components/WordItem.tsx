import React from 'react';
import {View, Text} from 'react-native';
import useWordActions from '~/hooks/useWrodActions';
import {Word} from '~/modules/words';

import {ListItem, Button} from 'react-native-elements';

export type WordItemProps = {
  word: Word;
};

const WordItem = ({word}: WordItemProps) => {
  const {onToggle, onRemove} = useWordActions(word.id);

  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{word.text}</ListItem.Title>
      </ListItem.Content>
      <Button
        title={word.done ? '비활성화' : '활성화'}
        type="outline"
        onPress={onToggle}
      />
      <Button
        title="삭제"
        type="outline"
        buttonStyle={{borderColor: '#F44336', backgroundColor: '#F44336'}}
        titleStyle={{color: 'white'}}
        onPress={onRemove}
      />
    </ListItem>
  );
};

export default WordItem;
