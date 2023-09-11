import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type OrderSummaryProps = {
    route: {
        params: {
            totalMangoesCount: number;
            totalTomatoesCount: number;
            mangoPrice: number;
            tomatoesPrice: number;
        };
    };
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ route }) => {
    const { totalMangoesCount, totalTomatoesCount, mangoPrice, tomatoesPrice } = route.params;

    const totalPrice = totalMangoesCount * mangoPrice + totalTomatoesCount * tomatoesPrice;
    const navigation = useNavigation();

    const handlePaymentPress = () => {
        navigation.navigate('PaymentScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Order Summary</Text>
            <Text>Total Mangoes: {totalMangoesCount}</Text>
            <Text>Total Tomatoes: {totalTomatoesCount}</Text>
            <Text>Total Price: ${totalPrice}</Text>
            <Button title="Proceed to Payment" onPress={handlePaymentPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default OrderSummary;
