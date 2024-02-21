/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  View,
  Spinner,
} from 'native-base';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, TouchableOpacity} from 'react-native';
const Example = () => {
  const Navigation = useNavigation();

  const handleLeave = () => {
    Navigation.navigate('form');
  };
  return (
    <SafeAreaView style={{backgroundColor: '#F1F7FE', height: '100%'}}>
      <View>
        <Text style={{fontSize: 22, marginTop: 20, marginLeft: 10}}>
          Upcoming / Pending Leave Request
        </Text>
      </View>
      <Box alignItems="center">
        <Box
          width={'370'}
          height={95}
          marginBottom={500}
          marginTop={10}
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
          <Box />

          <Stack
            p="6"
            space={13}
            flexDirection={'row'}
            justifyContent={'space-between'}>
            <View>
              <Text
                style={{marginBottom: 10, color: '#3E4684', fontWeight: 500}}>
                Start Date
              </Text>
              <Text style={{fontSize: 17}}>01/02/2024</Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text
                style={{marginBottom: 10, color: '#3E4684', fontWeight: 500}}>
                Leave Type
              </Text>
              <Text style={{fontSize: 17}}>Paid Leave</Text>
            </View>
            <View>
              <Text
                style={{marginBottom: 10, color: '#3E4684', fontWeight: 500}}>
                Reason
              </Text>
              <Text style={{fontSize: 17}}>personal</Text>
            </View>
          </Stack>
        </Box>
      </Box>
      <View>
        <Text style={{position: 'relative', bottom: 480, fontSize: 22}}>
          Leave Balance
        </Text>
      </View>
      <Box
        alignItems="center"
        display={'flex'}
        flex={2}
        flexDirection={'row'}
        style={{gap: 20}}>
        <Box
          position={'relative'}
          bottom={380}
          height={200}
          width={170}
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
          <Box />
          <Text
            style={{
              margin: 20,
              fontSize: 20,
              fontWeight: 500,
              color: '#3E4684',
            }}>
            Sick Leave
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 30,
              fontSize: 22,
              fontWeight: 500,
            }}>
            2
          </Text>
          {/* <Text style={{margin:25,fontSize:18,marginTop:20}}>Total Leaves : 5</Text> */}
          <Text
            style={{
              fontSize: 18,
              marginLeft: 25,
              position: 'relative',
              bottom: -10,
            }}>
            Taken Leave : 1
          </Text>
        </Box>
        <Box
          position={'relative'}
          bottom={380}
          height={200}
          width={170}
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
          <Box />
          <Text
            style={{
              margin: 20,
              fontSize: 20,
              fontWeight: 500,
              color: '#3E4684',
            }}>
            Casual Leave
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 30,
              fontSize: 22,
              fontWeight: 500,
            }}>
            5
          </Text>
          {/* <Text style={{margin:25,fontSize:18,marginTop:20}}>Total Leaves : 10</Text> */}
          <Text
            style={{
              fontSize: 18,
              marginLeft: 25,
              position: 'relative',
              bottom: -10,
            }}>
            Taken Leave : 5
          </Text>
        </Box>
      </Box>
      <Box
        alignItems="center"
        display={'flex'}
        flex={2}
        flexDirection={'row'}
        style={{gap: 20}}
        position={'relative'}
        bottom={250}>
        <Box
          position={'relative'}
          // bottom={450}
          top={75}
          height={200}
          width={170}
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
          <Text
            style={{
              margin: 20,
              fontSize: 20,
              fontWeight: 500,
              color: '#3E4684',
            }}>
            Paid Leave
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 30,
              fontSize: 22,
              fontWeight: 500,
            }}>
            0
          </Text>
          {/* <Text style={{margin:25,fontSize:18,marginTop:20}}>Total Leaves : 10</Text> */}
          <Text
            style={{
              fontSize: 18,
              marginLeft: 25,
              position: 'relative',
              top: 10,
            }}>
            Taken Leave : 1
          </Text>
          <Box />
        </Box>
        <Box
          position={'relative'}
          // bottom={450}
          top={75}
          height={200}
          width={170}
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
          <Box />
          <Text
            style={{
              margin: 20,
              fontSize: 20,
              fontWeight: 500,
              color: '#3E4684',
            }}>
            Unpaid Leave{' '}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 30,
              fontSize: 22,
              fontWeight: 500,
            }}>
            5
          </Text>
          {/* <Text style={{margin:25,fontSize:18,marginTop:20}}>Total Leaves : 10</Text> */}
          <Text
            style={{
              fontSize: 18,
              marginLeft: 25,
              position: 'relative',
              bottom: -10,
            }}>
            Taken Leave : 5
          </Text>
        </Box>
      </Box>
      {/* <View>
        <TouchableOpacity onPress={handleLeave}>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              textAlign: 'center',
              position: 'relative',
              width: '50%',
              padding: 15,
              left: 92,
              bottom: 50,
              backgroundColor: '#3E4684',
              borderRadius: 50,
            }}>
            Apply Leave
          </Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
