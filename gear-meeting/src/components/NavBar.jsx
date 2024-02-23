import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, useWindowDimensions } from 'react-native'
import styled from 'styled-components/native'
import menu from '../../assets/menu.png'
import user from '../../assets/person.png'
import { useAuth } from '../hooks/AuthProvider'

const SafeAreaView = styled.View`
  width: 100%;
  height: 50px;
  background-color: #000;
`
const ViewNavBar = styled.View`
  width: 375px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

ViewNavBar.MenuButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`

ViewNavBar.MainText = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 5px;
`

const UserView = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: gray;
  border: 2px;
  border-color: purple;
  margin-right: 5px;
`

const UserImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
`

const Modal = styled.View`
`

Modal.Background = styled.View`
  background-color: #27272782;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  z-index: 2;
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

export default function NavBar({MainText}) {
  const [image, setImage] = useState(null);
  const [menuModal, setMenuModal] = useState(false);
  const { height: windowHeight } = useWindowDimensions();
  const { signOut } = useAuth();

  const openMenuModal = () => {
    setMenuModal(true)
  }

  const closeMenuModal = () => {
    setMenuModal(false)
  }

  const handleLogout = () => {
    signOut()
  }

  return (
    <>
    {menuModal === true ? (
          <>
            <Modal.Background windowHeight={windowHeight}>
              <LinearGradient
                colors={['#000', '#040D29']}
                style={
                  {
                    width: 200,
                    left: 5,
                    top: 52,
                    borderRadius: 10,
                    padding: 10,
                    position: 'absolute',
                    zIndex: 4
                  }
                }
              >
                <Modal.Button

                >
                  <Modal.Text>Teste</Modal.Text>
                </Modal.Button>

                <Modal.Button
                  onPress={handleLogout}
                >
                  <Modal.Text>Logout</Modal.Text>
                </Modal.Button>

                <Modal.Button
                  onPress={closeMenuModal}
                >
                  <Modal.Text>Fechar</Modal.Text>
                </Modal.Button>
              </LinearGradient>
            </Modal.Background >
          </>
        ) : null}
      <SafeAreaView />
      <LinearGradient
        colors={['#000', '#040D29']}
        style={{
          width: '100%',
          height: 51,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        
        <ViewNavBar>
          <ViewNavBar.MenuButton onPress={openMenuModal}>
            <Image source={menu} alt='menu icon'/>
          </ViewNavBar.MenuButton>

          <ViewNavBar.MainText>{MainText.toUpperCase()}</ViewNavBar.MainText>

          <UserView>
            {image ? (
              <UserImage source={{ uri: URL.createObjectURL(image) }} alt='User image' />
            ) : (
              <UserImage source={user} alt='User image' />
            )}
          </UserView>
        </ViewNavBar>
      </LinearGradient>
    </>
  )
}
