/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful', 'Welcome!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Please provide valid email and password.');
    }
  };

  const validateEmail = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);

    setIsValidEmail(isValid && text.trim() !== '');
    setEmail(text);
  };

  const validatePassword = text => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isValid = passwordRegex.test(text);

    setIsValidPassword(isValid && text.trim() !== '');
    setPassword(text);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#DDE5F4', height: '100%'}} >
      <View style={styles.container} >
        <Text style={styles.header}>Login</Text>

        <View>
          <TextInput
            style={[styles.input, !isValidEmail && styles.invalidInput]}
            placeholder="Enter your Email"
            placeholderTextColor="#000000"
            onChangeText={text => validateEmail(text)}
            value={email}
          />
          {!isValidEmail && (
            <Text style={styles.errorText}>
              Please enter a valid email address
            </Text>
          )}
        </View>

        <View>
          <TextInput
            style={[styles.input, !isValidPassword && styles.invalidInput]}
            placeholder="Enter your Password"
            placeholderTextColor="#000000"
            onChangeText={text => validatePassword(text)}
            secureTextEntry={true}
            value={password}
          />
          {!isValidPassword && (
            <Text style={styles.errorText}>Please enter a valid password</Text>
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 17, color: '#000000'}}>
            Don't have an account?
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('sign')}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              padding: 15,
              color: 'blue',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#F1F7FE',
    marginTop: '37%',
    width: "82%",
    marginLeft: 35,
    shadowColor: '#000000',
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 3,
    borderWidth: 0.7,
    borderRadius: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#3E4684',
    textAlign: 'center', // Center text alignment
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 16,
    color: '#000000',
    paddingLeft: 15,
    shadowColor: '#F1F7FE',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  button: {
    backgroundColor: '#3E4684',
    padding: 10,
    borderRadius: 5,
    width: '105%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    position: 'absolute',
    top: -16,
    left: 10,
  },
});

export default LoginPage;
