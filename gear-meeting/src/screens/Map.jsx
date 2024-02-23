import React from 'react'
import NavBar from '../components/NavBar'
import { LinearGradient } from 'expo-linear-gradient'

export default function Map() {
  return (
    <>
      <NavBar MainText={"map"}/>
      <LinearGradient
        colors={['#040D29', '#1400FF']}
        style={{
          flex: 1, 
          width: '100%',
          padding: 20
        }}
      ></LinearGradient>
    </>
  )
}
