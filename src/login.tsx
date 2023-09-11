import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Contact: undefined;
    Home: undefined;
    Signup: undefined;
    ProductList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginAttempted, setLoginAttempted] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLogin = () => {
        if (username === 'Mahesh' && password === '123') {
            navigation.navigate('ProductList');
            console.log('Login successful');
        } else {
            Alert.alert("Invalid Username or Password")
            console.log("Login Failed")
        }
        setUsername('');
        setPassword('');
        setLoginAttempted(true);
    };

    const handleSignupNavigation = () => {
        navigation.navigate('Signup');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}
        >
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />
            {/* <Button title="Login" onPress={handleLogin} /> */}
            <TouchableOpacity
                style={styles.login_btn}
                onPress={handleLogin} >
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                    Login
                </Text>
            </TouchableOpacity>

            <View style={{ margin: 20 }}>
                {/* <Button title="Don,t have account signup here" onPress={handleSignupNavigation} /> */}
                <TouchableOpacity onPress={handleSignupNavigation}>
                    <Text>
                        Don't have account signup here
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'grey'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        marginBottom: 10,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        padding: 10,
    },
    login_btn: {
        backgroundColor: 'lightblue',
        justifyContent: 'center', height: '5%',
        width: '80%',
        alignItems: 'center', borderRadius: 10, elevation: 2
    }
});

export default Login;
