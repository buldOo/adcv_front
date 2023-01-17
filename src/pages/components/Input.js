import React from 'react';
import { View, Text, TextInput } from 'react-native';

//Styles
import GlobalStyles from '../GlobalStyle';

const Input = (props) => {
    return (  
        <View>
            <Text style={GlobalStyles.text}>{props.text}</Text>
            <TextInput 
                style={GlobalStyles.input}
            />
        </View>         
    );
};

function mt(value) {
    return {
        marginTop: value,
    }
};

export default Input;