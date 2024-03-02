import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient'
import EventNav from '../components/EventNav';

export default function Map({navigation}) {
  return (
    <>
      <NavBar MainText={"map"} navigation={navigation}/>
      <LinearGradient
        colors={['#040D29', '#1400FF']}
        style={{
          flex: 1, 
          width: '100%',
          padding: 5
        }}
      >
        <EventNav />
        <MapView 
          style={{flex: 12}}
          provider=''
          initialRegion={{
            latitude: -23.507778094045243,
            longitude: -46.93264072070735,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />

      </LinearGradient>
    </>
  )
}
