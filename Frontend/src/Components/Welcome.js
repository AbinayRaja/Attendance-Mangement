/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Box, Heading, Image, Button, NativeBaseProvider} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';
import {Axios} from 'axios';

const Example = () => {
  const Navigation = useNavigation();
  const handleLogin = () => {
    Navigation.navigate('Login');
  };
  const handleSignUp = () => {
    Navigation.navigate('sign');
  };

  const [zoomIn] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(zoomIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [zoomIn]);

  return (
    <Box alignItems="center">
      <Box
        width="390"
        height="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: '#DDE5F4',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: '#DDE5F4',
        }}>
        <Heading
          textAlign="center"
          marginTop={10}
          size="2xl"
          fontStyle="italic">
          Employee Attendance
        </Heading>
        <Animated.View
          style={{
            transform: [
              {
                scale: zoomIn.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.7, 1],
                }),
              },
            ],
          }}>
          <Image
            source={require('./Assests/Urgent-bro.png')}
            size={400}
            marginTop={20} // Adjust margin as needed
            alt="img"
          />
        </Animated.View>

        <Button
          onPress={handleLogin}
          borderRadius={20}
          fontSize={20}
          fontWeight={500}
          style={{
            width: '60%',
            marginLeft: '22%',
            height: '6%',
            backgroundColor: '#3E4684',
            fontSize: 20,
          }}>
          Login
        </Button>
        <Button
          onPress={handleSignUp}
          borderRadius={20}
          fontSize={30}
          fontWeight={500}
          marginTop={5}
          style={{
            width: '60%',
            marginLeft: '22%',
            height: '6%',
            backgroundColor: '#3E4684',
            fontSize: 20,
          }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  );
};
