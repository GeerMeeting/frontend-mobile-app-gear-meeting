import React from 'react'
import headerHome from '../../assets/headerHome.png'
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ticket from '../../assets/ticket.png'
import maps from '../../assets/googlemaps.png'
import cars from '../../assets/carrosEPilotos.png'
import CustomCard from '../components/Card';
import CustomHeader from '../components/Header';


const SafeAreaView = styled.View`
  width: 100%;
  height: 50px;
  background-color: #000000;
`
const HeaderImage = styled.Image`
  margin-top: 50px;
  position: absolute;
  top: -51px;
  width: 100%;
  z-index: 1;
`

const Scroll = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`

const CardViewPaddingTop = styled.View`
  width: 100%;
  margin-top: 220px;
`

export default function Home({ navigation }) {
  const handleGoToTicketScreen = () => {
    navigation.navigate('Ticket')
  }

  const handleGoToMapsScreen = () => {
    navigation.navigate('Map')
  }

  return (
    <>
      <SafeAreaView />
      <LinearGradient
        colors={['#000','#040D29', '#1400FF', '#17949C']}
        style={
          {
            width: '100%',
            top: 0,
            height: 1468,
            left: 0,
          }
        }
      >
        <HeaderImage source={headerHome} alt='Cars at a parking' />
        <CustomHeader />        

        <ScrollView style={{ zIndex: 3 }}>
          <Scroll>
            <CardViewPaddingTop>
              <CustomCard 
                label={'Ingressos'}
                onPress={handleGoToTicketScreen}
                description={'Compre o seu ingresso com facilidade e praticidade'}
                icon={ticket}
              />
            </CardViewPaddingTop>
            <CustomCard 
              label={'Mapa do Evento'}
              onPress={handleGoToMapsScreen}
              description={'Compre o seu ingresso com facilidade e praticidade'}
              icon={maps}
            />
            <CustomCard 
              label={'Carros e Pilotos'}
              description={'Compre o seu ingresso com facilidade e praticidade'}
              icon={cars}
            />
            <CustomCard 
              label={'Ingressos'}
              description={'Compre o seu ingresso com facilidade e praticidade'}
              icon={ticket}
            />
          </Scroll>
        </ScrollView>
      </LinearGradient>
    </>
  )
}
