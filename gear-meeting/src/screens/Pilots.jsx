import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import API from '../services/APIService'
import CustomCard from '../components/Card'
import { AxiosError } from 'axios'
import { ScrollView } from 'react-native'

const UserImage = styled.Image`
  width: 100%;
  flex: 3;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const PilotView = styled.View`
  width: 100%;
  flex: 2;
  background-color: #d9d9d9;
`

PilotView.title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
`



export default function Pilots({ navigation }) {
  const [drivers, setDrivers] = useState([]);
  const [image, setImage] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetchImage()
  }, [token]);
  
  const fetchImage = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setToken(token);    
  
      const response = await API.get('/drivers', token)
      setDrivers(response.data)

      const imagePromises = drivers.map(async (driver) => {
        const imageReceived = await API.getImage(`/drivers/${driver._id}/photo`, token);
        console.log(imageReceived)
        if(imageReceived instanceof AxiosError) {
          return console.log('Image not found');
        } else if (imageReceived.status !== 200) {
          const blob = new Blob([imageReceived.data]);
          const imageUrls = await Promise.all(imagePromises);
          setImage(imageUrls);
          return URL.createObjectURL(blob);
        }
      });
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <NavBar MainText={"Pilotos"} navigation={navigation}/>
      <LinearGradient
        colors={['#040D29', '#1400FF']}
        style={{
          flex: 1, 
          width: '100%',
          padding: 20,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ScrollView style={{width: 368}}>
          {drivers.length > 0 ? (
            drivers.map((driver, index) => (
              <CustomCard
                key={index}  
                label={driver.name}
                description={driver.description}
                image={image[index]}
              />
            ))
          ) : (<></>)}
        </ScrollView>
      </LinearGradient>

    </>
  )
}
