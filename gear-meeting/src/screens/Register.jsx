import React, { useState } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import logotype from '../../assets/logotipo.png'
import gear from '../../assets/gear.png'
import circuit from '../../assets/circuit.png'
import API from '../services/APIService';

// ================================
const Container = styled.View`
  flex: 1;
`;

const Content = styled.View`
  width: 100%;
  height: 270px;
  align-items: center;
  justify-content: center;
`;

const GearImage = styled.Image`
  position: absolute;
  top: 0;
  right: -20px;
`

const CircuitoImage = styled.Image`
  position: absolute;
  top: 100px;
  left: 0;
`
// ================================
const Subtitle = styled.Text`
  margin-top: 10px;
  color: white;
  font-size: 20px;
  /* font-family: Montserrat-Regular; */
`

// ================================
const ContainerRegister = styled.View`
  width: 275px;
  height: 429px;
`

ContainerRegister.Label = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
  color: #040D29;
  font-size: 14px;
`

ContainerRegister.LabelError = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
  color: red;
  font-size: 14px;
`

ContainerRegister.Input = styled.TextInput`
  width: 100%;
  height: 30px;
  background-color: #ffffffb1;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 14px;
`

ContainerRegister.InputError = styled.TextInput`
  width: 100%;
  height: 30px;
  background-color: #ffffffb1;
  border: 1px;
  border-color: red;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 14px;
`

ContainerRegister.ViewButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 16px;
`

ContainerRegister.Button = styled.TouchableOpacity`
  width: 175px;
  height: 52px;
  background-color: #040D29;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

ContainerRegister.ButtonError = styled.View`
  width: 175px;
  height: 52px;
  background-color: #a8a8a8;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

ContainerRegister.ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
`

ContainerRegister.ViewCadastro = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

ContainerRegister.TextCadastro = styled.Text`
  color: white;
  font-size: 14px;
  margin-right: 2px;
`

ContainerRegister.ButtonTextCadastro = styled.Text`
  color: #040D29;
  font-size: 14px;
  margin-left: 2px;
`
// ================================
const ViewFooter = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`

const TextFooter = styled.Text`
  color: #ffffff4e;
  font-size: 14px;
`
const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [registerError, setRegisterError] = useState(false);

  const handleRegister = async () => {
    const body = {
      email: email.toLowerCase(),
      name,
      phone: telephone,
      password,
      confirmPassword
    }

    await API.post('/register', body, (err, _) => {
      if(err) {
        setRegisterError(true)
        return console.error(err);
      } else {
        navigation.navigate('Login')
      }
    })
  }

  const handleBackToLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <LinearGradient colors={['#1400FF', '#17949C']} style={{ flex: 1, alignItems: 'center'}}>
        <GearImage source={gear} alt=''/>
        <CircuitoImage source={circuit} alt=''/>
        
        <Content>
          <Image source={logotype} alt=''/>
          <Subtitle>Onde tudo se encontra</Subtitle>
        </Content>

        <ContainerRegister>
          {registerError === true ? (
            <>
              <ContainerRegister.LabelError>* email</ContainerRegister.LabelError>
              <ContainerRegister.InputError
                placeholder={"exemple@mail.com"}
                value={email}
                onChangeText={(text) => { 
                  setRegisterError(false)
                  setEmail(text) 
                }}
              />

              <ContainerRegister.LabelError>* nome completo</ContainerRegister.LabelError>
              <ContainerRegister.InputError
                placeholder={"exemple@mail.com"}
                value={name}
                onChangeText={(text) => { 
                  setRegisterError(false)
                  setName(text) 
                }}
              />

              <ContainerRegister.LabelError>* senha</ContainerRegister.LabelError>
              <ContainerRegister.InputError
                placeholder={"Asd1xjw@!1"}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => { 
                  setRegisterError(false)
                  setPassword(text) 
                }}
              />

              <ContainerRegister.LabelError>* confirma senha</ContainerRegister.LabelError>
              <ContainerRegister.InputError
                placeholder={"************"}
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={(text) => { 
                  setRegisterError(false)
                  setConfirmPassword(text) 
                }}
              />

              <ContainerRegister.LabelError>* celular</ContainerRegister.LabelError>
              <ContainerRegister.InputError
                placeholder={"(99) 99999-9999"}
                value={telephone}
                keyboardType="phone-pad"
                onChangeText={(text) => { 
                  setTelephone(text) 
                }}
              />

              <ContainerRegister.ViewButton>
                <ContainerRegister.ButtonError>
                  <ContainerRegister.ButtonText>CADASTRAR</ContainerRegister.ButtonText>
                </ContainerRegister.ButtonError>
              </ContainerRegister.ViewButton>
            </>
          ) : (
            <>
              <ContainerRegister.Label>email</ContainerRegister.Label>
              <ContainerRegister.Input
                placeholder={"exemple@mail.com"}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <ContainerRegister.Label>nome completo</ContainerRegister.Label>
              <ContainerRegister.Input
                placeholder={"exemple@mail.com"}
                value={name}
                onChangeText={(text) => setName(text)}
              />

              <ContainerRegister.Label>senha</ContainerRegister.Label>
              <ContainerRegister.Input
                placeholder={"Asd1xjw@!1"}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />

              <ContainerRegister.Label>confirma senha</ContainerRegister.Label>
              <ContainerRegister.Input
                placeholder={"************"}
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
              />

              <ContainerRegister.Label>celular</ContainerRegister.Label>
              <ContainerRegister.Input
                placeholder={"(99) 99999-9999"}
                value={telephone}
                keyboardType="phone-pad"
                onChangeText={(text) => setTelephone(text)}
              />

              <ContainerRegister.ViewButton>
                <ContainerRegister.Button
                  onPress={handleRegister}
                >
                  <ContainerRegister.ButtonText>CADASTRAR</ContainerRegister.ButtonText>
                </ContainerRegister.Button>
              </ContainerRegister.ViewButton>
            </>
          )}

          <ContainerRegister.ViewCadastro>
            <ContainerRegister.TextCadastro>Já tem uma conta?</ContainerRegister.TextCadastro>
            <TouchableOpacity
              onPress={handleBackToLogin}
            >
              <ContainerRegister.ButtonTextCadastro>Voltar para login</ContainerRegister.ButtonTextCadastro>
            </TouchableOpacity>
          </ContainerRegister.ViewCadastro>
        </ContainerRegister>


        <ViewFooter>
          <TextFooter>All rights reserved by GeerMeeting @2024</TextFooter>
        </ViewFooter>
      </LinearGradient>
    </Container>
  );
};

export default Register;
