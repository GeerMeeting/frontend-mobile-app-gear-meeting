import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import styled, { css } from 'styled-components/native';


const Modal = styled.View`
 background-color: #0000004b;
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  height: ${({ windowHeight }) => windowHeight}px;
  display: flex;
  align-items: flex-end;
  z-index: 4;
`;

const modalRightStyles = css`
  right: 5px;
`;

const modalLeftStyles = css`
  left: 5px;
`;

Modal.Right = styled.View`
  background-color: #0000004b;
  position: absolute;
  top: 3px;
  right: 5px;
  width: 100%;
  height: ${({ windowHeight }) => windowHeight}px;
  display: flex;
  align-items: flex-end;
  z-index: 4;
`;

Modal.Left = styled.View`
    background-color: #0000004b;
  position: absolute;
  top: 3px;
  left: 5px;
  width: 100%;
  height: ${({ windowHeight }) => windowHeight}px;
  display: flex;
  align-items: flex-start;
  z-index: 4;
`;

Modal.Background = styled.View`
  background-color: #0000004b;
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  height: ${({ windowHeight }) => windowHeight}px;
  display: flex;
  align-items: flex-end;
  z-index: 4;
`

Modal.Button = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  background-color: #d9d9d930;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

Modal.Text = styled.Text`
  color: white;
  font-size: 14px;
`

export default function ModalSettings({ closeModal, logout, newButton, left = false }) {
  const { height: windowHeight } = useWindowDimensions();
  return (
    <>
      {left === true
        ? (
          <Modal.Left windowHeight={windowHeight}>
            <LinearGradient
              colors={['#000', '#040D29']}
              style={
                {
                  width: 200,
                  left: 5,
                  marginTop: 52,
                  borderRadius: 10,
                  padding: 10,
                  zIndex: 4
                }
              }
            >
              {newButton &&
                newButton.map((button, index) => (
                  <Modal.Button key={index} onPress={button.onpress}>
                    <Modal.Text>{button.text}</Modal.Text>
                  </Modal.Button>
                ))
              }

              <Modal.Button
                onPress={logout}
              >
                <Modal.Text>Logout</Modal.Text>
              </Modal.Button>

              <Modal.Button
                onPress={closeModal}
              >
                <Modal.Text>Fechar</Modal.Text>
              </Modal.Button>
            </LinearGradient>
          </Modal.Left>
        ) : (
          < Modal.Right windowHeight={windowHeight}>

            <LinearGradient
              colors={['#000', '#040D29']}
              style={
                {
                  width: 200,
                  right: 5,
                  marginTop: 52,
                  borderRadius: 10,
                  padding: 10,
                  zIndex: 4
                }
              }
            >
              {newButton &&
                newButton.map((button, index) => (
                  <Modal.Button key={index} onPress={button.onpress}>
                    <Modal.Text>{button.text}</Modal.Text>
                  </Modal.Button>
                ))
              }

              <Modal.Button
                onPress={logout}
              >
                <Modal.Text>Logout</Modal.Text>
              </Modal.Button>

              <Modal.Button
                onPress={closeModal}
              >
                <Modal.Text>Fechar</Modal.Text>
              </Modal.Button>
            </LinearGradient>
          </Modal.Right>

        )
      }
    </>
  )
}
