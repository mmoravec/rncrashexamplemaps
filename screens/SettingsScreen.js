import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';
import Router from '../navigation/Router';
import icons from '../constants/icons';
import data from '../constants/sampledata.json';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'exp.json'
    },
  }

  render() {
    return (
      <View style={styles.scrollView}>
        <ScrollView contentContainerStyle={styles.form}>
        {
          data.map(icon => {
            return (
              <TouchableHighlight
                onPress={this._onPress}
                key={icon.id}
                underlayColor="transparent">
                <Image
                  source={icons[icon.activity].icon}
                />
              </TouchableHighlight>
            );
          })
        }
        </ScrollView>
      </View>
    );
  }
  _onPress = () => {
    this.props.navigator.push(Router.getRoute('home'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
