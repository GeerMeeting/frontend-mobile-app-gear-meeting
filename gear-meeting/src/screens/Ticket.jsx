import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from 'react-native'

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
  background-color: lime;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 10px;
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
  const [ticketLote1, setTicketLote1] = useState(0);
  const [ticketLote2, setTicketLote2] = useState(0);
  const [ticketLote3, setTicketLote3] = useState(0);

  const handleAddNumber = ({ticket, setTicket}) => {
    if(setTicket) {
      if(ticket < 5) {
        return setTicket((ticket + 1));
      }
    }
  }

  const handleSubNumber = ({ticket, setTicket}) => {
    if(setTicket) {
      if(ticket > 0) {
        return setTicket((ticket - 1));
      }
    }
  }

  return (
    <>
      <NavBar MainText={"Ingressos"}/>
      <LinearGradient
        colors={['#040D29', '#1400FF']}
        style={{
          flex: 1, 
          width: '100%',
          padding: 20
        }}
      >
        <TicketCard>
          <TicketCard.ViewImage></TicketCard.ViewImage>
          <TicketCard.Title>Corrida Track</TicketCard.Title>
          <TicketCard.Description>
            Sábado dia 17/04 ocorrerá o mais inesquecível e épico evento de exposição e show de Drift do Brasil !
            Você vai entrar no verdadeiro mundo de Gearheads, levando toda a história do verdadeiro nome Corrida Track no Japão que foi uma das mais importantes da cena hashiriya japonesa entre 1987 e 1999.
            Teremos varias atrações no nosso evento, como foodtrucks, lojas de artigos personalizados e automotivos, muito musica, sorteios com varias premiações para vocês, muito Drift! 
          </TicketCard.Description>

          <TicketCard.Tickets>
            <TicketCard.TicketsView>

              <TicketCard.TicketsText>Ingresso Pedestre - 1° lote</TicketCard.TicketsText>

              <TicketCard.ViewAddLess>
                <TicketCard.AddTicket
                  onPress={() => handleSubNumber({ticket: ticketLote1, setTicket: setTicketLote1})}
                >
                  <Text style={{
                    fontSize: 13,
                    marginTop: -2
                  }}>-</Text>
                </TicketCard.AddTicket>
                  
                  <Text style={{marginHorizontal: 5}}>{ticketLote1}</Text>

                <TicketCard.AddTicket
                  onPress={() => handleAddNumber({ticket: ticketLote1, setTicket: setTicketLote1})}
                >
                  <Text style={{
                    fontSize: 13,
                    marginTop: -2
                  }}>+</Text>
                </TicketCard.AddTicket>
              </TicketCard.ViewAddLess>
            </TicketCard.TicketsView>
            <TicketCard.TicketsView>

              <TicketCard.TicketsText>Ingresso Pedestre - 2° lote</TicketCard.TicketsText>

              <TicketCard.ViewAddLess>
                <TicketCard.AddTicket
                  onPress={() => handleSubNumber({ticket: ticketLote2, setTicket: setTicketLote2})}
                >
                  <Text style={{
                    fontSize: 13,
                    marginTop: -2
                  }}>-</Text>
                </TicketCard.AddTicket>
                  
                  <Text style={{marginHorizontal: 5}}>{ticketLote2}</Text>

                <TicketCard.AddTicket
                  onPress={() => handleAddNumber({ticket: ticketLote2, setTicket: setTicketLote2})}
                >
                  <Text style={{
                    fontSize: 13,
                    marginTop: -2
                  }}>+</Text>
                </TicketCard.AddTicket>
              </TicketCard.ViewAddLess>

            </TicketCard.TicketsView>

            <TicketCard.TicketsView>

              <TicketCard.TicketsText>Ingresso Pedestre - 3° lote</TicketCard.TicketsText>

              <TicketCard.ViewAddLess>
                <TicketCard.AddTicket
                  onPress={() => handleSubNumber({ticket: ticketLote3, setTicket: setTicketLote3})}
                >
                  <Text style={{
                    fontSize: 13,
                    marginTop: -2
                  }}>-</Text>
                </TicketCard.AddTicket>
                  
                  <Text style={{marginHorizontal: 5}}>{ticketLote3}</Text>

                <TicketCard.AddTicket
                  onPress={() => handleAddNumber({ticket: ticketLote3, setTicket: setTicketLote3})}
                >
                  <Text style={{
                    fontSize: 13,
                    marginTop: -2
                  }}>+</Text>
                </TicketCard.AddTicket>
              </TicketCard.ViewAddLess>
            </TicketCard.TicketsView>
          </TicketCard.Tickets>
        </TicketCard>
      </LinearGradient>
    </>
  )
}
