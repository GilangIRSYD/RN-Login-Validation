import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import InputForm from '../components/InputForm';
import {
  backgroundColor,
  secondaryColor,
  secondaryDarkColor,
} from '../constants';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUsername: '',
      inputEmail: '',
      inputPassword: '',
      inputConfirmPass: '',
      usernameErrorMsg: '',
      emailErrorMsg: '',
      passwordErrorMsg: '',
      confirmPasswordErrorMsg: '',
    };
  }

  _onClickBtnRegister = () => {
    const isValid = this._validation();

    if (isValid) {
      this.props.navigation.goBack(null);
      this.showToast('Registrasi Berhasil');
    }
  };

  _validation = () => {
    let isValid = true;
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const {
      inputUsername,
      inputEmail,
      inputPassword,
      inputConfirmPass,
    } = this.state;

    if (inputUsername === '') {
      isValid = false;
      this.setState({usernameErrorMsg: 'Form ini tidak boleh kosong'});
    } else {
      this.setState({usernameErrorMsg: ''});
    }

    if (inputPassword.length < 8) {
      isValid = false;
      this.setState({passwordErrorMsg: 'Password minimal 8 karakter'});
    } else {
      this.setState({passwordErrorMsg: ''});
    }

    if (inputPassword !== inputConfirmPass) {
      isValid = false;
      this.setState({confirmPasswordErrorMsg: 'Password tidak cocok'});
    } else {
      this.setState({confirmPasswordErrorMsg: ''});
    }

    if (regEmail.test(inputEmail) === false) {
      isValid = false;
      this.setState({emailErrorMsg: 'Email tidak valid'});
    } else {
      this.setState({emailErrorMsg: ''});
    }

    return isValid;
  };

  showToast(msg) {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  }

  render() {
    const {
      usernameErrorMsg,
      passwordErrorMsg,
      confirmPasswordErrorMsg,
      emailErrorMsg,
    } = this.state;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/salt_logo.png')} />
        <Text style={styles.title}>Account Registration</Text>
        {/* Base Form */}
        <View style={styles.baseForm}>
          <InputForm
            placeholder={'Username'}
            errorMsg={usernameErrorMsg}
            onChangeText={(inputUsername) => this.setState({inputUsername})}
          />
          <InputForm
            placeholder={'Email'}
            errorMsg={emailErrorMsg}
            onChangeText={(inputEmail) => this.setState({inputEmail})}
          />
          <InputForm
            onChangeText={(inputPassword) => this.setState({inputPassword})}
            placeholder={'Password'}
            spyMode
            errorMsg={passwordErrorMsg}
          />
          <InputForm
            onChangeText={(inputConfirmPass) =>
              this.setState({inputConfirmPass})
            }
            placeholder={'Confirm Password'}
            spyMode
            errorMsg={confirmPasswordErrorMsg}
          />

          <TouchableOpacity onPress={() => this._onClickBtnRegister()}>
            <View style={styles.buttonRegist}>
              <Text style={{color: 'white'}}>REGISTER</Text>
            </View>
          </TouchableOpacity>
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
  },
  baseForm: {
    backgroundColor: secondaryColor,
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 52,
  },
  title: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 32,
  },
  inputForm: {
    backgroundColor: secondaryDarkColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#FFF',
    marginBottom: 18,
  },
  buttonRegist: {
    backgroundColor: backgroundColor,
    paddingVertical: 18,
    alignItems: 'center',
    width: '70%',
    borderRadius: 8,
    marginTop: 45,
    alignSelf: 'center',
  },
});
