import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

//Components
import Input from '../components/Input';

//Styles
import LoginStyle from './IdentificationStyle';
import GlobalStyles from '../GlobalStyle';

const LoginForm = () => {
    return (
        <View style={LoginStyle.form}>
            <View style={mt(110)}>
                <Input text="Email"/>
                <View style={mt(59)}>
                    <Input text="Mot de passe"/>
                </View>
            </View>
        </View>
    );
};

function mt(value) {
    return {
        marginTop: value,
    }
};

export default LoginForm;