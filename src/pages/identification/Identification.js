import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';

//Components
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

//Styles
import IdentificationStyle from './IdentificationStyle';
import GlobalStyles from '../GlobalStyle';

const Identification = () => {
    const [isShowingText, setIsShowingText] = useState(true);

    function switchPage() {
        setIsShowingText(!isShowingText);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={IdentificationStyle.container}>
                    <Text style={GlobalStyles.title}>{isShowingText ? "Connexion" : "Inscription"}</Text>
                    {isShowingText ? <LoginForm /> : <RegisterForm />}
                    <TouchableOpacity style={[GlobalStyles.button, mt(59)]}>
                        <Text style={GlobalStyles.buttonText}>{isShowingText ? "Connexion" : "Inscription"}</Text>
                    </TouchableOpacity>
                    <View style={[GlobalStyles.flex, mt(110)]}>
                        <Text style={GlobalStyles.text}>{isShowingText ? "Pas de compte ? " : "Déjà inscris ? "}</Text>
                        <Text onPress={switchPage} style={GlobalStyles.textGreen}>{isShowingText ? "Inscrivez-vous ici" : "Connectez-vous ici"}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

function mt(value) {
    return {
        marginTop: value,
    }
};
  
export default Identification;