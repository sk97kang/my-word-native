import React from 'react';
import {View, Text} from 'react-native';
import WordInsert from '~/components/WordInsert';
import WordList from '~/components/WordList';
import {Button} from 'react-native-elements';

import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
`;

const User = () => {
  return (
    <Container>
      <WordInsert />
      <WordList />
    </Container>
  );
};

export default User;
