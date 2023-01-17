import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

//Components
import Input from '../components/Input';

//Styles
import LoginStyle from './IdentificationStyle';

const RegisterForm = () => {
    return (
        <View style={LoginStyle.form}>
            <View style={mt(40)}>
                <Input text="Prènom"/>
                <View style={mt(20)}>
                    <Input text="Nom"/>
                </View>
                <View style={mt(20)}>
                    <Input text="Téléphone"/>
                </View>
                <View style={mt(20)}>
                    <Input text="Email"/>
                </View>
                <View style={mt(20)}>
                    <Input text="Mot de passe"/>
                </View>
                <View style={mt(20)}>
                    <Input text="Confirmation de mot de passe"/>
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

export default RegisterForm;