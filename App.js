import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import HomeView from './components/screens/Home';
import ProfileView from './components/screens/Profile';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeView,
  },
  Profile: {
    screen: ProfileView,
  },
},
{
  initialRouteName: 'Home',
});



