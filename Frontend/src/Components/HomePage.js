/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {

  SafeAreaView,
  StyleSheet,
  Text,

  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


// const [punch, SetPunch] = useState('');

const HomePage = () => {
  const Navigation = useNavigation();
  const [time, setTime] = useState('00:00:00');
  const [start, setStart] = useState(true);
  const [count, setCount] = useState(0);
  const [checkIn, setCheckInTime] = useState('00:00:00');
  const [checkOut, setCheckOut] = useState('00:00:00');
  const initTime = new Date();
  const [totalWorkingHours, setTotalWorkingHours] = useState('00:00:00');
  const [isCheckedIn, setIsCheckedIn] = useState(false);



  const handlePresent = () => {

    Navigation.navigate('presentPage', { checkIn, checkOut });
  };

  const handleLeave = () => {
    Navigation.navigate('leave');
  };
  //-------------------------------------------------------Date------------------------------------------------//
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${day}-${month}-${year}`;
  //-------------------------------------------------------CountDown------------------------------------------------//

  const Timer = start ? '00:00:00' : time;

  useEffect(() => {
    let timer;
    const showTimer = ms => {
      const hour = Math.floor((ms / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, '0');

      const second = Math.floor((ms / 1000) % 60)
        .toString()
        .padStart(2, '0');
      const minute = Math.floor((ms / 1000 / 60) % 60)
        .toString()
        .padStart(2, '0');
      setTime(hour + ':' + minute + ':' + second);
    };

    const startTimer = () => {
      timer = setInterval(() => {
        if (start) {
          return;
        }
        const left = count + (new Date() - initTime);
        setCount(left);
        showTimer(left);

        if (left <= 0) {

          clearInterval(timer);
        }
      }, 1);
    };


    startTimer();

    return () => clearInterval(timer);
  }, [start, count, initTime]);


  const handleCheckIn = async () => {

    console.log('handleCheckIn');
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    setIsCheckedIn(!isCheckedIn);


    if (start) {

      setCheckInTime(currentTime);
      setStart(false);
      console.log(currentTime, 'checkIn');


    } else {
      setCheckOut(currentTime);
      console.log(checkOut, 'checkout');
      setStart(true);
      setTime('00:00:00');
      setCount(0);
      const checkout = start ? '00:00:00' : time;
      setTotalWorkingHours(checkout);
      console.log(checkout, 'hours');
    }

  };




  useEffect(() => {
    // Adduser();
    const Timestore = checkOut == '00:00:00' ? null : Adduser();
    console.log(Timestore, "timestore");
  }, [checkOut]);
  // console.log(checkOut, 'depandency');



  const Adduser = async () => {
    const param = {
      date: formattedDate,
      checkinTime: checkIn,
      checkoutTime: checkOut,
    };
    console.log(param, 'param');

    try {
      const response = await fetch('http://192.168.2.87:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data posted successfully:', data);
    } catch (error) {
      console.error('There was a problem posting the data:', error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F1F7FE', height: '100%' }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: '#000' }}>{formattedDate}</Text>
        <Text style={styles.timer}>{Timer}</Text>
      </View>

      <View style={styles.check}>
        <View style={styles.in}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
              textAlign: 'center',
              fontWeight: 500,
            }}>
            Check In
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: '#3E4684',
              marginTop: 5,
              textAlign: 'center',
              fontWeight: 500,
            }}>
            {checkIn}
          </Text>
        </View>
        <View style={styles.in}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
              textAlign: 'center',
              fontWeight: 500,
            }}>
            Check Out
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: 'red',
              textAlign: 'center',
              marginTop: 5,
              fontWeight: 500,
            }}>
            {checkOut}
          </Text>
        </View>
      </View>
      <View>

        <View style={styles.leave}>
          <TouchableOpacity onPress={handleLeave}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                textAlign: 'center',
                fontWeight: 500,
              }}>
              Leave
            </Text>
            <Text style={{ fontSize: 30, color: '#000', textAlign: 'center' }}>
              0
            </Text>
          </TouchableOpacity>
        </View>



        <View
          style={{
            position: 'relative',
            bottom: '100%',
            left: 203,
            borderWidth: 1,
            padding: 10,
            width: '45%',
            borderRadius: 20,
            height: 85,
            backgroundColor: '#DDE5F4',
            borderColor: 'transparent',
          }}>
          <TouchableOpacity onPress={handlePresent}>

            <Text
              style={{
                fontSize: 20,
                color: '#333333',
                textAlign: 'center',
                fontWeight: 500,
              }}>
              Present
            </Text>

            <Text style={{ fontSize: 25, color: '#000', textAlign: 'center' }}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>


      </View>

      <View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom:'15%'
            position: 'relative',
            bottom: 90,
          }}>
          <Text
            style={{
              color: '#535C91',
              fontSize: 20,
              position: 'relative',
              // marginBottom: 20
            }}>
            Total Working Hours
          </Text>
          <Text
            style={{
              fontSize: 23,
              // marginBottom:30,
              position: 'relative',
              // bottom: 90,
              color: '#000',
              fontWeight: 500,
            }}>
            {totalWorkingHours}
          </Text>
        </View>
      </View>

      <View style={[styles.myBtn, isCheckedIn && { backgroundColor: 'red' }]}>
        <TouchableOpacity onPress={handleCheckIn}>
          <Text style={{ color: '#fff', fontSize: 22 }}>
            {isCheckedIn ? 'Check Out' : 'Check In'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 5,

    textAlign: 'center',

    display: 'flex',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // marginTop: '30%',
  },
  timer: {
    fontSize: 40,
    color: '#000',
  },

  check: {
    flexDirection: 'row',

    marginBottom: 105,
    padding: 30,
    display: 'flex',
    justifyContent: 'space-between',
    // width: 410,
    width: '105%',
    gap: 30,
  },
  in: {
    flex: 1, // Make both in views take equal space
    borderWidth: 1,
    // marginTop: 5,
    padding: 25,
    backgroundColor: '#DDE5F4',
    borderRadius: 30,
    width: '30%',
    height: 100,
    marginLeft: -10,
    textAlign: 'right',
    borderColor: 'transparent',
  },
  leave: {
    position: 'relative',
    bottom: 85,
    left: 12,
    gap: 10,
    borderWidth: 1,
    width: '45%',
    borderRadius: 20,
    backgroundColor: '#DDE5F4',
    padding: 10,
    height: 85,
    textAlign: 'center',
    borderColor: 'transparent',
  },
  myBtn: {
    width: '50%',
    height: '7%',

    color: '#fff',
    backgroundColor: '#3E4684',
    borderRadius: 50,
    // margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    fontSize: 20,
    marginTop: 20,
    position: 'relative',
    left: '25%',
    top: -50,

  },

});
