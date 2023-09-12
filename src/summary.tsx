import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = any

type OrderSummaryRouteParams = {
    totalMangoesCount: number;
    totalTomatoesCount: number;
    mangoPrice: number;
    tomatoesPrice: number;
    PaymentOptions: undefined;
};

type OrderSummaryRouteProp = RouteProp<RootStackParamList, 'OrderSummary'>;

const OrderSummary: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<OrderSummaryRouteProp>();
    const params = route.params as OrderSummaryRouteParams;

    const totalMangoesCount = params.totalMangoesCount;
    const totalTomatoesCount = params.totalTomatoesCount;
    const mangoPrice = params.mangoPrice;
    const tomatoesPrice = params.tomatoesPrice;

    const totalPrice = totalMangoesCount * mangoPrice + totalTomatoesCount * tomatoesPrice;

    const handleProceedToPayment = () => {
        navigation.navigate('PaymentOptions');
    };

    return (
        <View>
            <Text>Total Mangoes: {totalMangoesCount}</Text>
            <Text>Total Tomatoes: {totalTomatoesCount}</Text>
            <Text>Total Price: ${totalPrice}</Text>
            <TouchableOpacity onPress={handleProceedToPayment}>
                <View style={styles.proceedButton}>
                    <Text style={styles.buttonText}>Proceed to Payment</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    proceedButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
});

export default OrderSummary;
