import React, { useState } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import logotype from '../../assets/logotipo.png'
import gear from '../../assets/gear.png'
import circuit from '../../assets/circuit.png'
import API from '../services/APIService';
import { useAuth } from '../hooks/AuthProvider';

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
const ContainerLogin = styled.View`
  width: 275px;
  height: 310px;
  margin-top: 10%;
`

ContainerLogin.Label = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
  color: #040D29;
  font-size: 14px;
`

ContainerLogin.LabelError = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
  color: red;
  font-size: 14px;
`


ContainerLogin.Input = styled.TextInput`
  width: 100%;
  height: 30px;
  background-color: #ffffffb1;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 36px;
`

ContainerLogin.InputError = styled.TextInput`
  width: 100%;
  height: 30px;
  background-color: #ffffffb1;
  border: 1px;
  border-color: red;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 36px;
`

ContainerLogin.ViewButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 59px;
  margin-bottom: 16px;
`

ContainerLogin.Button = styled.TouchableOpacity`
  width: 175px;
  height: 52px;
  background-color: #040D29;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

ContainerLogin.ButtonError = styled.View`
  width: 175px;
  height: 52px;
  background-color: #a8a8a8;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

ContainerLogin.ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
`

ContainerLogin.ViewCadastro = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

ContainerLogin.TextCadastro = styled.Text`
  color: white;
  font-size: 14px;
  margin-right: 2px;
`

ContainerLogin.ButtonTextCadastro = styled.Text`
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
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const { signIn } = useAuth();

  const handleLogin = () => {
    API.login(email, password, (err, data) => {
      if (err) {
        console.log("ERROR2: ", err);
        setLoginError(true)
        return console.log(err);
      }

      const token = data.data.token
      console.log('TOKEN: ', token)
      if (token) {
        signIn(token)
        navigation.navigate('PrivateRoutes')
      }
    })
  }

  const handleRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <Container>
      <LinearGradient colors={['#1400FF', '#17949C']} style={{ flex: 1, alignItems: 'center' }}>
        <GearImage source={gear} alt='' />
        <CircuitoImage source={circuit} alt='' />

        <Content>
          <Image source={logotype} alt='' />
          <Subtitle>Onde tudo se encontra</Subtitle>
        </Content>


        <ContainerLogin>
          {loginError === true ? (
            <>
              <ContainerLogin.LabelError>* email</ContainerLogin.LabelError>
              <ContainerLogin.InputError
                placeholder={"exemple@mail.com"}
                value={email}
                onChangeText={(text) => {
                  setLoginError(false)
                  setEmail(text)
                }}
              />

              <ContainerLogin.LabelError>* password</ContainerLogin.LabelError>
              <ContainerLogin.InputError
                placeholder={"************"}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => {
                  setLoginError(false)
                  setPassword(text)
                }}
              />

              <ContainerLogin.ViewButton>
                <ContainerLogin.ButtonError>
                  <ContainerLogin.ButtonText>LOGIN</ContainerLogin.ButtonText>
                </ContainerLogin.ButtonError>
              </ContainerLogin.ViewButton>
            </>
          ) : (
            <>
              <ContainerLogin.Label>email</ContainerLogin.Label>
              <ContainerLogin.Input
                placeholder={"exemple@mail.com"}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <ContainerLogin.Label>password</ContainerLogin.Label>
              <ContainerLogin.Input
                placeholder={"************"}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />

              <ContainerLogin.ViewButton>
                <ContainerLogin.Button
                  onPress={handleLogin}
                >
                  <ContainerLogin.ButtonText>LOGIN</ContainerLogin.ButtonText>
                </ContainerLogin.Button>
              </ContainerLogin.ViewButton>
            </>
          )}


          <ContainerLogin.ViewCadastro>
            <ContainerLogin.TextCadastro>não tem conta?</ContainerLogin.TextCadastro>
            <TouchableOpacity
              onPress={handleRegister}
            >
              <ContainerLogin.ButtonTextCadastro>cadastre-se</ContainerLogin.ButtonTextCadastro>
            </TouchableOpacity>
          </ContainerLogin.ViewCadastro>
        </ContainerLogin>
        <ViewFooter>
          <TextFooter>All rights reserved by GeerMeeting @2024</TextFooter>
        </ViewFooter>
      </LinearGradient>
    </Container>
  );
};

export default Login;
