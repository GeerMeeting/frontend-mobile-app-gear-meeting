import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import user from '../../assets/person.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import API from '../services/APIService'


const UserView = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: gray;
  border: 2px;
  border-color: purple;
  margin-right: 5px;
`

const UserViewHigh = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 50px;
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

const UserImageHigh = styled.Image`
  width: 95px;
  height: 95px;
  border-radius: 47.5px;
`

export default function User({ onPress, high=false }) {
  const [image, setImage] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetchImage()
  }, [token]);
  
  const fetchImage = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
      const userId = await AsyncStorage.getItem('userId');
      
      const response = await API.getImage(`/logins/${userId}/photo`, token)
      const blob = new Blob([response.data]);
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      {high ? (
        <UserViewHigh
          onPress={onPress}
        >
          {image ? (
            <>
              <UserImageHigh 
                source={{ uri: image }} 
                alt='User image' 
              />
            </>
          ) : (
            <UserImageHigh 
              source={user} 
              alt='User image' 
            />
          )}
        </UserViewHigh>
      ) : (
        <UserView
          onPress={onPress}
        >
          {image ? (
            <>
              <UserImage source={{ uri: image }} alt='User image' />
            </>
          ) : (
            <UserImage source={user} alt='User image' />
          )}
        </UserView>

      )}
    </>
  )
}
