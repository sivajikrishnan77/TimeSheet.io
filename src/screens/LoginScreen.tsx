/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Alert } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  BottomTab: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;



export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  if (!username || !password) {
    Alert.alert('Warning', 'Fill all required fields');
    return;
  }
  navigation.replace('BottomTab');
};

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 , backgroundColor:'#121212' }}>
      <Text variant="titleLarge" style={{fontWeight:'bold',color:'#de0d0d'}}>Login</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={{ marginVertical: 10 }}
        left={<TextInput.Icon icon="account" />}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginVertical: 10 }}
        left={<TextInput.Icon icon="lock" />}
      />
      <Button mode="contained" onPress={() => {handleLogin()}}style={{backgroundColor:'#18c9d5'}}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('Signup')}>
        Don’t have an account? Sign Up
      </Button>
    </View>
  );
}