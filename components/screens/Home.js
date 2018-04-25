import React from 'react';
import { Font, AppLoading } from 'expo';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Home extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/Gaegu-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  
  static navigationOptions = {
    header: null,
  };

  render() {
    if(this.state.fontLoaded){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>The Zen Programming is a way to learn code without knew that the life isn't a run.</Text>
          <View style={styles.buttomView}>
            <Text style={styles.button}>></Text> 
          </View>
        </View>
      );
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      padding: 20,
      paddingTop: 100,
      height: 500,
      fontFamily: 'open-sans-bold',
      fontSize: 35,
    },
    buttomView: {
      marginLeft: 240,
      height: 40,
      width: 40,
      borderRadius: 100,
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
    },
    button: {
      textAlign: 'center',
    }
});