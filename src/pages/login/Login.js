import React from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

//Styles
import LoginStyle from './LoginStyle';
import GlobalStyles from '../GlobalStyle';

const Login = () => {
    return (
        <SafeAreaView style={LoginStyle.container}>
            <Text style={GlobalStyles.title}>Connexion</Text>
            <View style={LoginStyle.form}>
                <View style={mt(110)}>
                <Text style={GlobalStyles.text}>Email</Text>
                <TextInput 
                    style={GlobalStyles.input}
                />
                </View>
                <View style={mt(59)}>
                <Text style={GlobalStyles.text}>Mot de passe</Text>
                <TextInput 
                    style={GlobalStyles.input}
                />
                </View>
                <TouchableOpacity style={[GlobalStyles.button, mt(59)]}>
                <Text style={GlobalStyles.buttonText}>Connexion</Text>
                </TouchableOpacity>
            </View>
            <View style={[GlobalStyles.flex, mt(110)]}>
                <Text style={GlobalStyles.text}>Pas de compte ? </Text>
                <Text style={GlobalStyles.textGreen}>Inscrivez-vous ici</Text>
            </View>
        </SafeAreaView>
    );
};

function mt(value) {
    return {
        marginTop: value,
    }
};
  
export default Login;