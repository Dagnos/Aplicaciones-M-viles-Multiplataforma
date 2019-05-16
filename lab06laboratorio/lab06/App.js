/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			path: 'home/',
			navigationOptions: {
				title: 'Esta es la Home'
			}
		},
		Details: DetailsScreen
	},
	{
		initialRouteName: 'Home'
		/*defaultNavigationOptions: {
			title: 'Un titulo genérico',
			headerStyle: {
				backgroundColor: '#f4511e'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
    }*/
	}
);

export default createAppContainer(AppNavigator);
