import {
  ImageBackground,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import styles from './Styles/signUpStyle';

const signUp = () => {
  return (
    <SafeAreaView style={{flex: 1, justifycontent: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.textInputstyle}></TextInput>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textInputstyle}></TextInput>
        <Text style={styles.termsline}>Terms of use and Privacy policy</Text>
        <View style={styles.signUpButton}>
          <Text style={styles.buttonText}>SignUp</Text>
        </View>
        <Text style={styles.termsline}>or signup with social account</Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.imageView}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: '/Users/gurisaini/Documents/Calculator/components/assets/twitter.png',
              }}></Image>
          </View>
          <View style={styles.imageView}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: '/Users/gurisaini/Documents/Calculator/components/assets/facebook.png',
              }}></Image>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default signUp;
