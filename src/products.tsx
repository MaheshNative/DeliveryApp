import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    OrderSummary: undefined;
};
type SummaryScreenParams = {
    totalMangoesCount: number;
    totalTomatoesCount: number;
};

const MANGO_PRICE = 10; // Price per mango
const TOMATOES_PRICE = 20; // Price per tomato

const Stack = createStackNavigator<RootStackParamList>();

const ProductList: React.FC = () => {
    const [mangoesCount, setMangoesCount] = useState(0);
    const [tomatoesCount, setTomatoesCount] = useState(0);
    const [totalMangoesCount, setTotalMangoesCount] = useState(0);
    const [totalTomatoesCount, setTotalTomatoesCount] = useState(0);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        // Calculate the total counts whenever mangoesCount or tomatoesCount changes
        setTotalMangoesCount(mangoesCount);
        setTotalTomatoesCount(tomatoesCount);
    }, [mangoesCount, tomatoesCount]);

    const increaseMangoesCount = () => {
        setMangoesCount(mangoesCount + 1);
    };

    const decreaseMangoesCount = () => {
        if (mangoesCount > 0) {
            setMangoesCount(mangoesCount - 1);
        }
    };

    const increaseTomatoesCount = () => {
        setTomatoesCount(tomatoesCount + 1);
    };

    const decreaseTomatoesCount = () => {
        if (tomatoesCount > 0) {
            setTomatoesCount(tomatoesCount - 1);
        }
    };

    // Calculate the total price
    const totalPrice = totalMangoesCount * MANGO_PRICE + totalTomatoesCount * TOMATOES_PRICE;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Product List</Text>
            <View style={styles.productItem}>
                <Text>Mangoes</Text>
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={decreaseMangoesCount}>
                        <Text style={styles.counterButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counter}>{mangoesCount}</Text>
                    <TouchableOpacity onPress={increaseMangoesCount}>
                        <Text style={styles.counterButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.price}>{`$${MANGO_PRICE} each`}</Text>
            </View>
            <View style={styles.productItem}>
                <Text>Tomatoes</Text>
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={decreaseTomatoesCount}>
                        <Text style={styles.counterButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counter}>{tomatoesCount}</Text>
                    <TouchableOpacity onPress={increaseTomatoesCount}>
                        <Text style={styles.counterButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.price}>{`$${TOMATOES_PRICE} each`}</Text>
            </View>

            <Text style={styles.totalPrice}>{`Total Price: $${totalPrice}`}</Text>

            <TouchableOpacity
                style={styles.totalContainer}
                onPress={() => {
                    navigation.navigate('OrderSummary', {
                        totalMangoesCount,
                        totalTomatoesCount,
                        mangoPrice: MANGO_PRICE,
                        tomatoesPrice: TOMATOES_PRICE,
                    } as unknown as RootStackParamList['OrderSummary']);
                }}
            >

                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>
                    Buy {totalMangoesCount + totalTomatoesCount} Items
                </Text>
            </TouchableOpacity>
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
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        fontSize: 24,
        marginHorizontal: 10,
        color: 'blue',
    },
    counter: {
        fontSize: 18,
    },
    price: {
        fontSize: 16,
        color: 'gray',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    totalContainer: {
        marginTop: 20,
        borderTopColor: '#ccc',
        height: '5%',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
});

export default ProductList;
