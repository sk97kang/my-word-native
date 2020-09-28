import React from 'react';
import {View, Text} from 'react-native';
import useWords from '~/hooks/uesWords';
import WordItem from '~/components/WordItem';

import styled from 'styled-components/native';

const Container = styled.ScrollView``;

const Title = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const WordList = () => {
  const words = useWords();
  if (words.length === 0) {
    return (
      <View>
        <Text>등록된 항목이 없습니다.</Text>
      </View>
    );
  }
  return (
    <Container>
      <Title>My Word List</Title>
      {words.map((word) => (
        <WordItem word={word} key={word.id} />
      ))}
    </Container>
  );
};

export default WordList;
