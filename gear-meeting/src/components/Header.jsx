import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import logotype from '../../assets/logotipo-row.png'
import user from '../../assets/person.png'
import { useWindowDimensions } from 'react-native';
import { useAuth } from '../hooks/AuthProvider';
import styled from 'styled-components/native';
import API from '../services/APIService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = styled.View`
  width: 100%;
  height: 51px;
  display: flex;
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

export default function CustomHeader({ navigation }) {
  const [userModal, setUserModal] = useState(false);
  const [image, setImage] = useState(null)
  const { height: windowHeight } = useWindowDimensions();
  const { signOut } = useAuth();

  // useEffect(async () => {
  //   fetchImage()
  // }, [image]);

  const fetchImage = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');

    API.get(`/logins/${userId}/photo`, (err, data) => {
    if(err) {
      console.error(err);
    } else {
      const response = data.data
      setImage(response);
    }
    }, token)
  }

  const handleOpenUserModal = () => {
    setUserModal(true);
  }

  const handleCloseUserModal = () => {
    setUserModal(false);
  }

  const handleLogout = async () => {
    signOut()
  }

  const handleGoToUserScreen = () => {
    navigation.navigate('User')
  }

  return (
    <>
      {userModal === true ? (
          <Modal.Background windowHeight={windowHeight}>
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
              <Modal.Button
                onPress={handleGoToUserScreen}
              >
                <Modal.Text>Minha Conta</Modal.Text>
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
            {image ? (
              <UserImage source={{ uri: URL.createObjectURL(image) }} alt='User image' />
            ) : (
              <UserImage source={user} alt='User image' />
            )}
          </UserView>
        </Header>
    </>
  )
}
