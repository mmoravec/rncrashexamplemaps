import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import { Components } from 'exponent';
import Router from '../navigation/Router';
import icons from '../constants/icons';
import data from '../constants/sampledata.json';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  }

  render() {
      let region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    return (
      <View style={styles.container}>
        <Components.MapView
          style={{ flex: 1, backgroundColor: '#fff' }}
          initialRegion={region}
          onRegionChangeComplete={this._onRegionChange}>
          {
            data.map(event =>
              <Components.MapView.Marker
                key={event.id}
                coordinate={{
                  longitude: event.location.coordinates[0],
                  latitude: event.location.coordinates[1],
                }}
                image={icons[event.activity].icon}
                onPress={this._onMarkerPress}
              />
            )
          }
        </Components.MapView>
      </View>
    );
  }
  _onMarkerPress = () => {
    this.props.navigator.push(Router.getRoute('settings'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
