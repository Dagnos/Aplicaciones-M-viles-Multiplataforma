import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Bienvenido a la App!',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
		}
	};
	_showMoreApp = () => {
		this.props.navigation.navigate('Chat');
	};
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	render() {
		return (
			<View style={styles.container}>
				<Button title="Muestrame el chat" onPress={this._showMoreApp} />
				<Button title="Mejor, cierra sesión :)" onPress={this._signOutAsync} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		top: 30
	}
});
