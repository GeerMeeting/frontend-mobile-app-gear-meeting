import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import NavBar from '../components/NavBar'
import User from '../components/User'
import AsyncStorage from '@react-native-async-storage/async-storage'
import API from '../services/APIService'
import { useAuth } from '../hooks/AuthProvider'



const UserContent = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
`

UserContent.Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 50px;
`

UserContent.TextView = styled.TouchableOpacity`
  width: 250px;
  height: 30px;
  background-color: #d9d9d9;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px;
  border-color: #343434;
  margin: 5px;
  display: flex;
  justify-content: center;
`

UserContent.Text = styled.Text`
  font-size: 16px;
  color: #343434;
`

UserContent.TextInput = styled.TextInput`
  width: 250px;
  height: 30px;
  background-color: #d9d9d9;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px;
  border-color: #343434;
  margin: 10px;
  display: flex;
  justify-content: center;
`

UserContent.Button = styled.TouchableOpacity`
  width: 200px;
  height: 55px;
  margin-top: 150px;
  margin-bottom: 15px;
  background-color: #17949C;
  border-radius: 15px;
  border: 1px;
  border-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

UserContent.Button.Text = styled.Text`
  font-size: 24px;
  color: #ffffff;
`

UserContent.ButtonExclude = styled.TouchableOpacity`
`


UserContent.ButtonExcludeView = styled.View`
  display: flex;
  flex-direction: row;
`

UserContent.ButtonExcludeText = styled.Text`
  font-size: 12px;
  color: white;
  margin-left: 2px;
  margin-right: 2px;
`

UserContent.ButtonSave = styled.TouchableOpacity`
  width: 200px;
  height: 55px;
  margin-top: 80px;
  margin-bottom: 15px;
  background-color: #45c8d2;
  border-radius: 15px;
  border: 1px;
  border-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function MyProfile() {
  const [user, setUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const { signOut } = useAuth();

  useEffect(() => {
    fetchUser()
  })

  const fetchUser = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const token = await AsyncStorage.getItem('token')
      const response = await API.get(`/logins/${userId}`, token)

      if (response.status === 200) {
        setUser(response.data)
      }

    } catch (e) {
      console.error(e)
    }
  }

  const handleLogout = () => {
    signOut();
  }

  const handleEditEmail = () => {
    setIsEditing(true);
    setIsEditingEmail(true);
  }

  const handleEditName = () => {
    setIsEditing(true);
    setIsEditingName(true);
  }

  const handleEditPassword = () => {
    setIsEditing(true);
    setIsEditingPassword(true);
  }

  const handleEditPhone = () => {
    setIsEditing(true);
    setIsEditingPhone(true);
  }

  const handleCancelEditing = () => {
    setIsEditing(false);
    setIsEditingEmail(false);
    setIsEditingName(false);
    setIsEditingPassword(false);
    setIsEditingPhone(false);
  }


  return (
    <>
      <NavBar MainText={"Meu Perfil"} showOff={true} />
      <LinearGradient
        colors={['#040D29', '#1400FF']}
        style={{
          flex: 1,
          width: '100%',
          padding: 20,
        }}
      >
        <UserContent>
          <User high={true} />
          {user ? (
            <>
              <UserContent.Title>{user.name}</UserContent.Title>
              {user && isEditingEmail === true ? (
                <UserContent.TextInput>{user.email}</UserContent.TextInput>
              ) : (
                <UserContent.TextView
                  onPress={handleEditEmail}
                >
                  <UserContent.Text>{user.email}</UserContent.Text>
                </UserContent.TextView>
              )}

              {user && isEditingName === true ? (
                <UserContent.TextInput>{user.name}</UserContent.TextInput>
              ) : (
                <UserContent.TextView
                  onPress={handleEditName}
                >
                  <UserContent.Text>{user.name}</UserContent.Text>
                </UserContent.TextView>
              )}

              {user && isEditingPassword === true ? (
                <UserContent.TextInput>********</UserContent.TextInput>
              ) : (
                <UserContent.TextView
                  onPress={handleEditPassword}
                >
                  <UserContent.Text>********</UserContent.Text>
                </UserContent.TextView>
              )}

              {user && isEditingPhone === true ? (
                <UserContent.TextInput>{user.phone}</UserContent.TextInput>
              ) : (
                <UserContent.TextView
                  onPress={handleEditPhone}
                >
                  <UserContent.Text>{user.phone}</UserContent.Text>
                </UserContent.TextView>
              )}

            </>
          ) : (
            <>
              <UserContent.Text>Your name here</UserContent.Text>
            </>
          )}

          {user && isEditing ? (
            <>
              <UserContent.Button
                style={{marginTop: 80, widht: 180}}  
                onPress = {handleCancelEditing}
              >
                <UserContent.Button.Text>Cancelar</UserContent.Button.Text>
              </UserContent.Button>

              <UserContent.ButtonSave
                style={{marginTop: 15}}
                onPress = {handleCancelEditing}
              >
                <UserContent.Button.Text>Salvar</UserContent.Button.Text>
              </UserContent.ButtonSave>
            </>
          ) : (
            <>
              <UserContent.Button
                onPress={handleLogout}
              >
                <UserContent.Button.Text>Sair</UserContent.Button.Text>
              </UserContent.Button>

              <UserContent.ButtonExcludeView>
                <UserContent.ButtonExcludeText>
                  Deseja excluir sua conta?
                </UserContent.ButtonExcludeText>

                <UserContent.ButtonExclude>
                  <UserContent.ButtonExcludeText style={{ color: 'red' }}>
                    Excluir conta
                  </UserContent.ButtonExcludeText>
                </UserContent.ButtonExclude>

              </UserContent.ButtonExcludeView>
            </>
          )}

        </UserContent>

      </LinearGradient>
    </>
  )
}
