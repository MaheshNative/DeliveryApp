import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
    OrderConfirmation: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

const PaymentOptions: React.FC = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handlePayWithCreditCard = () => {
        navigation.navigate('OrderConfirmation');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a Payment Method</Text>
            <TouchableOpacity onPress={handlePayWithCreditCard}>
                <View style={styles.paymentOption}>
                    <Text style={styles.optionText}>Pay with Credit Card</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle PayPal payment */ }}>
                <View style={styles.paymentOption}>
                    <Text style={styles.optionText}>Pay with PayPal</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paymentOption: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        width: '80%',
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 18,
    },
});

export default PaymentOptions;
