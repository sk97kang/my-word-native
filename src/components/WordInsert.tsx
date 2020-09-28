import React, {useState} from 'react';
import {View, Text} from 'react-native';
import useAddWord from '~/hooks/useAddWord';

import {Button} from 'react-native-elements';
import Dialog from 'react-native-dialog';

const WordInsert = () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const addWord = useAddWord();

  const onChangeValue = (text: string) => {
    setValue(text);
  };

  const toggleVisible = () => setVisible(!visible);

  const onSave = () => {
    addWord(value);
    setValue('');
    toggleVisible();
  };
  return (
    <View>
      <Button
        title="+"
        type="outline"
        onPress={toggleVisible}
        containerStyle={{
          position: 'absolute',
          zIndex: 100,
          top: 5,
          right: 5,
        }}
        buttonStyle={{
          width: 40,
          height: 40,
          borderRadius: 40,
          backgroundColor: '#2196F3',
        }}
        titleStyle={{color: 'white'}}
      />
      <Dialog.Container visible={visible}>
        <Dialog.Title>무엇이든 입력해보세요!</Dialog.Title>
        <Dialog.Input
          label="아래에 입력해주세요."
          value={value}
          onChangeText={onChangeValue}
          wrapperStyle={{borderBottomWidth: 1}}
        />
        <Dialog.Button label="취소" onPress={toggleVisible} />
        <Dialog.Button label="저장" onPress={onSave} />
      </Dialog.Container>
    </View>
  );
};

export default WordInsert;
