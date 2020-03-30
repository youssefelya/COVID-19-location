import React, { Component } from 'react';
import { Alert,Text, Image, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    onLogin() {
        const { email, password } = this.state;

        Alert.alert('Credentials', `${email} + ${password}`);
    }
    forgetPassword(){
        Alert.alert('forget password');
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={'Email....'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity style = {styles.forget} onPress = {this.forgetPassword}><Text>Forget Password ?</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.loginBtn} onPress={this.onLogin.bind(this)}><Text>LOGIN</Text></TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    loginBtn : {
        width:'20%',
        height:'6%',
        padding:10,
        //textColor:"#01d1e5",
        backgroundColor:"lavenderblush",
        borderColor: '#080200'
    },
    forget:{
    width: 100,
    height: 54,
   padding: 10
    }
});