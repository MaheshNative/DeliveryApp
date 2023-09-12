import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderConfirmation: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Confirmed!</Text>
            <Text>Your order has been successfully placed.</Text>
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
});

export default OrderConfirmation;
