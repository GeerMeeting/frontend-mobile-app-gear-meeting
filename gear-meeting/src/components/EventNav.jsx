import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import API from '../services/APIService'

const Events = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

Events.Button = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
`

Events.ViewTitle = styled.View`
  display: flex;
  width: 200px;
  display: flex;
  align-items: center;
`

Events.Title = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  
`

Events.Text = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`

export default function EventNav() {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await API.get('/events', token)

      if(response.status === 200) {
        setEvents(response.data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleNextEvent = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % events.length); 
  }

  const currentEvent = events[currentIndex]; 
  return (
    <Events>
          <Events.Button onPress={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)}>
            <Events.Text>{"<"}</Events.Text>  
          </Events.Button>
          <Events.ViewTitle>
            <Events.Title>{currentEvent ? currentEvent.name.toUpperCase() : ""}</Events.Title>
          </Events.ViewTitle>
          <Events.Button onPress={handleNextEvent}>
            <Events.Text>{">"}</Events.Text>  
          </Events.Button>
        </Events>
  )
}
