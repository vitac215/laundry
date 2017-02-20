'use strict'

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, StyleSheet, Image, TextInput, Alert } from 'react-native';

import Button from 'apsl-react-native-button';
import store from '../store';
import API from '../api';

import StatusScene from './StatusScene';

export default class SignupScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordconfirm: '',
      address: '',
      propertyName: ''
    }
  }

  async signupAction() {
    const { navigator } = this.props;
    const { username, password, passwordconfirm, address, propertyName } = this.state;

    if (!username || !password || !address || !propertyName) {
      Alert.alert('Please enter all the information');
      return;
    }

    if (password !== passwordconfirm) {
      Alert.alert('Passwords do not match');
      return;
    }

    // Create a new user
    try {
      let res = await API.signUp(username, password, address, propertyName);
      console.log(res);
      if (res && res.success===true) {
        // Store the user data
        store.setUsername(username);
        store.setPassword(password);
        store.setAddress(address);
        store.setPropertyName(propertyName);

        // Navigate to the status scene
        navigator.push({
          name: 'Status',
          title: propertyName,
          passProps: this.state,
          component: StatusScene
        })
        return;
      // Alert error message
      } else {
        Alert.alert(res.msg);
        return;
      }
      return;
    } catch(err) {
      console.log(err);
    }
  }


  render() {
    const {username, password, passwordconfirm, address, propertyName} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.bgWrapper}>
          <Image source={require('../img/bg.png')} style={styles.bg} />
        </View>

        <View style={styles.signupContainer}>
          <View style={styles.inputContainer}>

            <TextInput style={styles.textInput}
              onChangeText={ (username) => {this.setState({username})}}
              placeholder='username'
              placeholderTextColor='rgba(51,51,51,0.5)'
              autoCorrect={false}
              value={username} />

            <TextInput style={styles.textInput}
              onChangeText={ (password) => {this.setState({password})}}
              placeholder='password'
              secureTextEntry
              placeholderTextColor='rgba(51,51,51,0.5)'
              autoCorrect={false}
              value={password} />

              <TextInput style={styles.textInput}
              onChangeText={ (passwordconfirm) => {this.setState({passwordconfirm})}}
              placeholder='confirm password'
              secureTextEntry
              placeholderTextColor='rgba(51,51,51,0.5)'
              autoCorrect={false}
              value={passwordconfirm} />

              <TextInput style={styles.textInput}
              onChangeText={ (address) => {this.setState({address})}}
              placeholder='address'
              placeholderTextColor='rgba(51,51,51,0.5)'
              autoCorrect={false}
              value={address} />

              <TextInput style={styles.textInput}
              onChangeText={ (propertyName) => {this.setState({propertyName})}}
              placeholder='property name'
              placeholderTextColor='rgba(51,51,51,0.5)'
              autoCorrect={false}
              value={propertyName} />
          </View>

            <Button style={styles.btn}
                    textStyle={{fontSize: 18, color: 'white', fontWeight: 'bold'}}
                    onPress={this.signupAction.bind(this)}>
              Sign up
            </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  bgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  btn: {
    backgroundColor: '#FFADAD',
    alignSelf: 'center',
    borderWidth: 0,
    margin: 15,
    marginTop: 250,
    width: 300
  },

  text: {
    color: '#929292',
    alignSelf: 'center'
  },

  textInput: {
    alignSelf: 'center',
    height: 40,
    width: 250,
    marginTop: 10,
    backgroundColor: '#fff',
    fontSize: 17,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255,255,255,0.6)',
    padding: 10
  },

  inputContainer: {
    marginBottom: 30
  },

  signupContainer: {
    justifyContent: 'center',
    marginTop: 200
  }

});