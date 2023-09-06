/**
 * @format
 */

import { AppRegistry, NativeModules } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

export default NativeModules.SplashScreen;

AppRegistry.registerComponent(appName, () => App);
