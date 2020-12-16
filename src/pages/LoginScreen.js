import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import InputForm from '../components/InputForm';
import {
  backgroundColor,
  secondaryColor,
  secondaryDarkColor,
} from '../constants';

export default class LoginScreen extends Component {
  state = {
    inputUsername: '',
    inputPassword: '',
    usernameErrorMsg: '',
    passwordErrorMsg: '',
  };

  _validasi = (username, password) => {
    let isValid = true;
    if (username.trim() == '') {
      isValid = false;
      this.setState({
        usernameErrorMsg: 'Username tidak boleh kosong',
      });
    } else {
      this.setState({
        usernameErrorMsg: '',
      });
    }

    if (password.trim() == '' || password.length < 8) {
      this.setState({
        passwordErrorMsg: 'Password < 8 karakter',
      });
      isValid = false;
    } else {
      this.setState({
        passwordErrorMsg: '',
      });
    }

    return isValid;
  };

  handelButtonLogin = () => {
    const {inputUsername, inputPassword} = this.state;
    const isValid = this._validasi(inputUsername, inputPassword);
    if (isValid) {
      if (inputUsername === 'Gilang') {
        if (inputPassword === 'gilangkece123') {
          this.props.navigation.navigate('Home');
        } else {
          this.showToast('Password salah');
        }
      } else {
        this.showToast('Username tidak ditemukan');
      }
    }
  };

  showToast(msg) {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  }

  render() {
    const {usernameErrorMsg, passwordErrorMsg} = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={{marginTop: 42, marginBottom: 32}}
          source={require('../assets/salt_logo.png')}
        />
        {/* base Form */}
        <View style={styles.baseForm}>
          <InputForm
            placeholder={'Username'}
            errorMsg={usernameErrorMsg}
            onChangeText={(inputUsername) => this.setState({inputUsername})}
          />
          <InputForm
            onChangeText={(inputPassword) => this.setState({inputPassword})}
            placeholder={'Password'}
            spyMode
            errorMsg={passwordErrorMsg}
          />

          <View style={{flexDirection: 'row-reverse', marginTop: 18}}>
            <TouchableOpacity onPress={() => this.handelButtonLogin()}>
              <View style={styles.buttonLogin}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <View style={styles.buttonRegister}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>
                  REGISTER
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  baseForm: {
    backgroundColor: secondaryColor,
    width: '100%',
    paddingVertical: 54,
    borderRadius: 25,
    elevation: 10,
    paddingHorizontal: 16,
  },
  inputForm: {
    backgroundColor: secondaryDarkColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#FFF',
  },
  buttonLogin: {
    backgroundColor: backgroundColor,
    paddingHorizontal: 42,
    paddingVertical: 14,
    marginLeft: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonRegister: {
    backgroundColor: secondaryColor,
    paddingHorizontal: 42,
    paddingVertical: 14,
    marginLeft: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
});
