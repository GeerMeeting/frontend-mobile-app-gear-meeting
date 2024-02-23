import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import styled from 'styled-components/native'

const Card = styled.View`
  width: 368px;
  height:135px;
  background-color: #000000bb;
  border-radius: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`
Card.View = styled.View`
  margin-top: 20px;
  width: 368px;
`

Card.Label = styled.Text`
  font-size: 14px;
  color: white;
  margin-left: 20px;
`

Card.ViewDescription = styled.View`
  width: 217px;
  height: 135px;
  justify-content: center;
  padding-left: 20px;
`

Card.Description = styled.Text`
  font-size: 14px;
  color: white;
`

Card.Open = styled.TouchableOpacity`
`

Card.OpenText = styled.Text`
  font-size: 12px;
  color: #17949C;
`

Card.Image = styled.Image`
  width: 60px;
  height: 60px;
`

export default function CustomCard({label, description, icon, style, onPress}) {
  return (
    <Card.View>
      <Card.Label>{label}</Card.Label>
      <Card>
        <Card.ViewDescription>
          <Card.Description>{description}</Card.Description>
          <Card.Open onPress={onPress}>
            <Card.OpenText>clique aqui</Card.OpenText>
          </Card.Open>

        </Card.ViewDescription>
        <LinearGradient
          colors={['#00000010', '#1400FF', '#17949C']}
          style={
            {
              width: 151,
              height: 135,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Card.Image source={icon} alt='' />
        </LinearGradient>
      </Card>
    </Card.View>
  )
}
