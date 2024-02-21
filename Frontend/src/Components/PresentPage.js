/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card } from '@rneui/base';
import axios, { Axios } from 'axios';




const PresentPage = props => {
  const [users, setUsers] = useState([]);


  useEffect(() => {

    

    axios.get('http://192.168.2.87:8080/users')
      .then(res => {
        console.log(res.data, 'data');
        setUsers(res.data);
        // console.log(res.data,"abinaya");

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);




  return (
    <SafeAreaView style={{ backgroundColor: '#F1F7FE', height: '100%' }}>
      <View>
        <Text
          style={{ margin: 15, fontSize: 25, color: '#000', fontWeight: 500 }}>
          Total Present Days
        </Text>
      </View>
      <Card>

        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#3e4684',
              fontWeight: 500,
              fontSize: 15,
            }}>
            Date
          </Text>
          <Text
            style={{
              marginRight: -25,
              color: '#3e4684',
              fontWeight: 500,
              fontSize: 15,
            }}>
            In Time
          </Text>
          <Text
            style={{
              marginRight: 8,
              color: '#3e4684',
              fontWeight: 500,
              fontSize: 15,
            }}>
            Out Time
          </Text>
          {/* <Text
              style={{
                position: 'relative',
                left: -5,
                color: '#3e4684',
                fontWeight: 500,
                fontSize: 15,
              }}>
              Attendance
            </Text> */}
        </View>

        {/* {users.map((user, index) => (
    <ScrollView>
            <View
              style={{



                marginTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'space-between',

                  marginTop: 10,
                }}>
                <Text
                  style={{
                    marginRight: 9,
                    color: '#000',
                    fontSize: 15,
                    fontWeight: 500,
                  }}>
                  {user.date}
                </Text>
                <Text
                  style={{
                    marginLeft: -7,
                    color: '#000',
                    fontSize: 15,
                    fontWeight: 500,
                  }}>
                  {user.checkinTime}
                </Text>
                <Text
                  style={{
                    // marginLeft: 30,
                    color: '#000',
                    fontSize: 15,
                    fontWeight: 500,
                  }}>
                  {user.checkoutTime}
                </Text>
                <Text
                  style={{
                    marginLeft: -65,
                    color: '#000',
                    fontSize: 15,
                    fontWeight: 500,
                  }} />
              </View>
            </View>
</ScrollView>
          ))} */}

        <ScrollView>
          {users.map((user, index) => (
            <View key={index} style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ marginRight: 9, color: '#000', fontSize: 15, fontWeight: '500' }}>
                  {user.date}
                </Text>
                <Text style={{ marginLeft: -7, color: '#000', fontSize: 15, fontWeight: '500' }}>
                  {user.checkinTime}
                </Text>
                <Text style={{ color: '#000', fontSize: 15, fontWeight: '500' }}>
                  {user.checkoutTime}
                </Text>
                <Text style={{ marginLeft: -60, color: '#000', fontSize: 15, fontWeight: '500' }} />
              </View>
            </View>
          ))}
        </ScrollView>




      </Card>
    </SafeAreaView>
  );
};

export default PresentPage;

const styles = StyleSheet.create({});
