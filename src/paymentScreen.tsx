import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen: React.FC = () => {
    const navigation = useNavigation();
    const navigateToOrderConfirmation = () => {
        navigation.navigate('OrderConfirmationScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Payment Methods</Text>

            <TouchableOpacity style={styles.paymentMethod} onPress={navigateToOrderConfirmation}>
                <Text>PayTm</Text>
            </TouchableOpacity>
            <View style={styles.paymentMethod}>
                <Text>PayPal</Text>

            </View>
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    head: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    paymentMethod: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
});
