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

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const Navigation = useNavigation();
  const handleSignUp = () => {
    if (username && email && password) {
      Alert.alert('Sign Up Successful', 'Account created successfully!');
      Navigation.navigate('Home');
    } else {
      Alert.alert(
        'Sign Up Failed',
        'Please provide valid username, email, and password.',
      );
    }
  };

  const validateUsername = text => {
    const isValid = text.trim() !== '';
    setIsValidUsername(isValid);
    setUsername(text);
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

    setIsValidPassword(isValid && text.trim() !== ''); // Check if password is valid and not empty
    setPassword(text);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#DDE5F4', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>

        <View>
          <TextInput
            style={[styles.input, !isValidUsername && styles.invalidInput]}
            placeholder="Username"
            placeholderTextColor="#000000"
            onChangeText={text => validateUsername(text)}
            value={username}
          />
          {!isValidUsername && (
            <Text style={styles.errorText}>Please enter a username</Text>
          )}
        </View>

        <View>
          <TextInput
            style={[styles.input, !isValidEmail && styles.invalidInput]}
            placeholder="Email"
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
            placeholder="Password"
            placeholderTextColor="#000000"
            onChangeText={text => validatePassword(text)}
            secureTextEntry={true}
            value={password}
          />
          {!isValidPassword && (
            <Text style={styles.errorText}>
              Password must be at least 8 characters long and contain at least
              one lowercase letter, one uppercase letter, one number, and one
              special character
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: '#F1F7FE', // Transparent background
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
    marginBottom: 30,
    color: '#3E4684',
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
    marginTop:40
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
    top: 40,
    left: 10,
  },
});


export default SignUpPage;
