import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import styles from '../../styles';
import {ScrollView, Text, StatusBar, Button} from 'react-native';
import Header from '../header/header'
import {SafeAreaView} from 'react-navigation';
class Listings extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.common.body}>
        <Header profile={true} />
        <ScrollView
          contentContainerStyle={styles.common.bodyScrollView}>
            <Text>Listings</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
mapStateToProps = state => {
  return {};
};
mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listings);
