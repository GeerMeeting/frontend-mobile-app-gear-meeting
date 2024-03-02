import React, { useEffect, useState } from 'react'
import logotype from '../../assets/logotipo-row.png'
import { useAuth } from '../hooks/AuthProvider';
import styled from 'styled-components/native';
import ModalSettings from './ModalSettings';
import User from './User';

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

export default function CustomHeader({ navigation }) {
  const [userModal, setUserModal] = useState(false);
  const { signOut } = useAuth();

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
    navigation.navigate('MyProfile')
  }

  return (
    <>
      {userModal === true ? (
          <ModalSettings 
            closeModal={handleCloseUserModal} 
            logout={handleLogout}
            newButton={[
              {text: 'Minha Conta', onpress: handleGoToUserScreen},
            ]}
          />
        ) : null
        }
        <Header>
          <LogotypeImage source={logotype} alt='Logotype Gear Meeting' />
          <User onPress={handleOpenUserModal}/>
        </Header>
    </>
  )
}
