import { _setShouldThrowAnErrorOutsideOfExpo } from 'expo/build/environment/validatorState';
_setShouldThrowAnErrorOutsideOfExpo(false);

import { AppRegistry } from 'react-native';

import App from './App';

AppRegistry.registerComponent('main', () => App);
