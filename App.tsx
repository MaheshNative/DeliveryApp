import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login';
import Contact from './src/contact';
import Home from './src/home';
import Signup from './src/signUp';
import ProductList from './src/products';
import OrderConfirmationScreen from './src/orderConfirmation';
import OrderSummary from './src/summary';
import PaymentOptions from './src/paymentOptions';
import OrderConfirmation from './src/orderConfirmation';


const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Contact" options={{ headerShown: false }} component={Contact} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
        <Stack.Screen name="ProductList" options={{ headerShown: false }} component={ProductList} />
        <Stack.Screen name="OrderSummary" options={{ headerShown: false }} component={OrderSummary} />
        <Stack.Screen name="PaymentOptions" options={{ headerShown: false }} component={PaymentOptions} />
        <Stack.Screen name="OrderConfirmation" options={{ headerShown: false }} component={OrderConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
