/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ExampleComments from './Comments/Comment'

AppRegistry.registerComponent(appName, () => ExampleComments);
