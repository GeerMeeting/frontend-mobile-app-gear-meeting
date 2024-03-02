import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import menu from '../../assets/menu.png'
import { useAuth } from '../hooks/AuthProvider'
import ModalSettings from './ModalSettings'
import User from './User'

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
  align-items: center;
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

export default function NavBar({navigation, MainText, showOff=false}) {
  const [menuModal, setMenuModal] = useState(false);
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

  const handleHome = () => {
    navigation.navigate('Home');
  }

  return (
    <>
    {menuModal === true ? (
          <>
            <ModalSettings 
              logout={handleLogout}
              closeModal={closeMenuModal}
              left={true}
            />
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
        {showOff ? (
          <ViewNavBar style={{justifyContent: 'center'}}>
            {showOff ? null : (
              <ViewNavBar.MenuButton onPress={openMenuModal}>
                <Image source={menu} alt='menu icon'/>
              </ViewNavBar.MenuButton>
            )}

            <ViewNavBar.MainText>{MainText.toUpperCase()}</ViewNavBar.MainText>

            {showOff ? null : (
              <User />
            )}
          </ViewNavBar>
        ): (
          <ViewNavBar>
          {showOff ? null : (
            <ViewNavBar.MenuButton onPress={openMenuModal}>
              <Image source={menu} alt='menu icon'/>
            </ViewNavBar.MenuButton>
          )}

          <ViewNavBar.MainText>{MainText.toUpperCase()}</ViewNavBar.MainText>

          {showOff ? null : (
            <User />
          )}
        </ViewNavBar>
        )}
        
      </LinearGradient>
    </>
  )
}
