/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import homeScreen from './components/homeScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => homeScreen);
