import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';
import {Text, Button, Overlay, Tile} from 'react-native-elements';
import useInit from '~/hooks/useInit';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: 24px;
  margin-bottom: 30px;
`;

const StyledButton = styled(Button)``;

const ModalContainer = styled.View`
  width: 300px;
  height: 300px;
`;

const Home = () => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const toggleOverlay = () => setisModalVisible(!isModalVisible);
  const init = useInit();

  const getItem = async () => {
    try {
      const words = await AsyncStorage.getItem('words');
      if (words !== null) {
        init(JSON.parse(words));
      }
    } catch (error) {
      console.log('Home : ', error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Container>
      <StyledText>고민이 있으신가요?</StyledText>
      <StyledButton
        title="버튼을 눌러보세요"
        type="outline"
        raised
        containerStyle={{width: '50%'}}
        onPress={toggleOverlay}
      />
      <Overlay isVisible={isModalVisible} onBackdropPress={toggleOverlay}>
        <ModalContainer>
          <Tile
            imageContainerStyle={{width: 300, height: 300}}
            imageSrc={{
              uri:
                'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            }}
            title="Hi"
            caption="Kan"
            featured
            onPress={toggleOverlay}
          />
        </ModalContainer>
      </Overlay>
    </Container>
  );
};

export default Home;
