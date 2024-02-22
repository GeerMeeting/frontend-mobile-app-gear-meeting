import React, { useState } from 'react'
import headerHome from '../../assets/headerHome.png'
import styled from 'styled-components/native';
import logotype from '../../assets/logotipo-row.png'
import user from '../../assets/user.heic'
import { useWindowDimensions } from 'react-native';
import { useAuth } from '../hooks/AuthProvider';
import { LinearGradient } from 'expo-linear-gradient';


const SafeAreaView = styled.View`
  width: 100%;
  height: 50px;
  background-color: #000000;
`
const HeaderImage = styled.Image`
  margin-top: 50px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`

const Header = styled.View`
  width: 100%;
  height: 51px;
  display: flex;
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`

const LogotypeImage = styled.Image`
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
  background-color: #040D29;
  right: 5px;
  margin-top: 52px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  padding: 10px;
`

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

const ContainerHome = styled.View`
  margin-top: 210px;
  background-color: #ff0000;
  width: 100%;
  flex: 1;
`

export default function Home() {
  const [userModal, setUserModal] = useState(false);
  const { height: windowHeight } = useWindowDimensions();
  const { signOut } = useAuth();

  const handleOpenUserModal = () => {
    setUserModal(true);
  }

  const handleCloseUserModal = () => {
    setUserModal(false);
  }

  const handleLogout = () => {
    signOut()

  }

  return (
    <>
      <SafeAreaView />
      <HeaderImage source={headerHome} alt='Cars at a parking' />
      {userModal === true ? (
        <Modal.Background windowHeight={windowHeight}>
          <LinearGradient
            colors={['#000', '#040D29']}
            style={
              {
                width: 200,
                right: 5,
                marginTop: 52,
                height: 300,
                borderRadius: 10,
                padding: 10,
                zIndex: 4
              }
            }
          >
            <Modal.Button
              onPress={handleLogout}
            >
              <Modal.Text>Teste</Modal.Text>
            </Modal.Button>

            <Modal.Button
              onPress={handleLogout}
            >
              <Modal.Text>Logout</Modal.Text>
            </Modal.Button>

            <Modal.Button
              onPress={handleCloseUserModal}
            >
              <Modal.Text>Fechar</Modal.Text>
            </Modal.Button>
          </LinearGradient>
        </Modal.Background >
      ) : null
      }
      <Header>
        <LogotypeImage source={logotype} alt='Logotype Gear Meeting' />
        <UserView
          onPress={handleOpenUserModal}
        >
          <UserImage source={user} alt='User image' />
        </UserView>
      </Header>

      <LinearGradient
        colors={['#1400FF', '#17949C']}
        style={
          {
            width: '100%',
            marginTop: 210,
            flex: 1,
            position: 'relative',
            top: 0,
            left: 0,
          }
        }
      >

      </LinearGradient>

    </>
  )
}
