import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderConfirmationScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Order Confirmation</Text>
            <Text>Your order has been confirmed!</Text>
        </View>
    );
};

export default OrderConfirmationScreen;

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
});
