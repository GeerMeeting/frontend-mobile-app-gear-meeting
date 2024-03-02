import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from 'react-native'
import EventNav from '../components/EventNav'
import AsyncStorage from '@react-native-async-storage/async-storage'
import API from '../services/APIService'

const TicketCard = styled.View`
  flex: 1;
  display: flex;
  background-color: #d9d9d9;
  margin-top: 30px;
  border-radius: 10px;
`

TicketCard.ViewImage = styled.View`
  width: 100%;
  height: 200px;
  background-color: gray;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 10px;
`

TicketCard.Image = styled.Image`
  width: 100%;
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

TicketCard.Title = styled.Text`
  font-size: 16px;
  color: #242424;
  margin: 10px;
  margin-bottom: 20px;
  font-weight: bold;
`

TicketCard.Description = styled.Text`
  font-size: 14px;
  color: #242424;
  margin-left: 10px;
  margin-right: 10px;
`

TicketCard.Tickets = styled.View`
  width: 270px;
  flex: 1;
  align-self: center;
  margin-top: 40px;
`

TicketCard.TicketsView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

TicketCard.TicketsText = styled.Text`
  font-size: 16px;
  color: #242424;
  margin-left: 10px;
  margin-right: 10px;
`

TicketCard.ViewAddLess = styled.View`
  display: flex;
  flex-direction: row;
`

TicketCard.AddTicket = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #BBBBBB;
  border: 1px;
  border-color: #1400FF;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Ticket() {
  const[image, setImage] = useState(null);
  const [validLotes, setValidLotes] = useState(3);
  const [ticket, setTicket] = useState(1);

  useEffect(() => {
    fetchImage()
  }, []);
  
  const fetchImage = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      const events = await API.get(`/events`, token)
      console.log(events.data)

      const response = await API.getImage(`/events/${events.data[0]._id}/photo`, token)
      const blob = new Blob([response.data]);
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
    } catch (e) {
      console.error(e)
    }
  }

  const handleAddNumber = () => {
    if (ticket < 5) {
      return setTicket((ticket + 1));
    }
  }

  const handleSubNumber = () => {
    if (ticket > 1) {
      return setTicket((ticket - 1));
    }
  }

  return (
    <>
      <NavBar MainText={"Ingressos"} />
      <LinearGradient
        colors={['#040D29', '#1400FF']}
        style={{
          flex: 1,
          width: '100%',
          padding: 20
        }}
      >
        <TicketCard>
          <TicketCard.ViewImage>
            <TicketCard.Image
              source={{uri: image}}
            />
          </TicketCard.ViewImage>
          <TicketCard.Title>Corrida Track</TicketCard.Title>
          <TicketCard.Description>
            Sábado dia 17/04 ocorrerá o mais inesquecível e épico evento de exposição e show de Drift do Brasil !
            Você vai entrar no verdadeiro mundo de Gearheads, levando toda a história do verdadeiro nome Corrida Track no Japão que foi uma das mais importantes da cena hashiriya japonesa entre 1987 e 1999.
            Teremos varias atrações no nosso evento, como foodtrucks, lojas de artigos personalizados e automotivos, muito musica, sorteios com varias premiações para vocês, muito Drift!
          </TicketCard.Description>

          <TicketCard.Tickets>
            {validLotes ? (
              <>
                <TicketCard.TicketsView>

                  <TicketCard.TicketsText>Ingresso Pedestre - {validLotes}° lote</TicketCard.TicketsText>

                  <TicketCard.ViewAddLess>
                    <TicketCard.AddTicket
                      onPress={handleSubNumber}
                    >
                      <Text style={{
                        fontSize: 13,
                        marginTop: -2
                      }}>-</Text>
                    </TicketCard.AddTicket>

                    <Text style={{ marginHorizontal: 5 }}>{ticket}</Text>

                    <TicketCard.AddTicket
                      onPress={handleAddNumber}
                    >
                      <Text style={{
                        fontSize: 13,
                        marginTop: -2
                      }}>+</Text>
                    </TicketCard.AddTicket>
                  </TicketCard.ViewAddLess>
                </TicketCard.TicketsView>
              </>
            ) : (
              <></>
            )}
          </TicketCard.Tickets>
        </TicketCard>
      </LinearGradient>
    </>
  )
}
