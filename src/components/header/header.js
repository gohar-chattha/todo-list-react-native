import React, {Fragment} from 'react';
import * as util from '../../utilities/index';
import styles from '../../styles';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import * as TASKS from '../../store/actions';
class Header extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });
  constructor(props) {
    super(props);
  }
  render() {
    const {back, title, clear} = this.props;
    return (
      <View style={styles.header.headerContainer}>
        <View style={styles.header.headerIconContainer}>
          {back ? (
            <Icon
            name="arrow-left"
            size={util.WP(6)}
            type="font-awesome"
            color={util.BASE_COLOR}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          ) : null}
        </View>
        <View style={styles.header.headerLogoContainer}>
          {title ? (
            <Text
              style={styles.header.headerTitle}>
              {title}
            </Text>
          ) : (
            <Image
              style={styles.header.headerIcon}
              resizeMode="contain"
              source={require('../../assets/todo-logo.jpg')}
            />
          )}
        </View>
        <View style={styles.header.headerIconContainer}>
            {clear ? (
              <Icon
              name="trash"
              size={util.WP(6)}
              type="font-awesome"
              color={util.BASE_COLOR}
              onPress={() => {
                this.props.addTodo([])
              }}
            />
            ) : null}
        </View>
      </View>
    );
  }
}
mapStateToProps = (state) => {
  return {};
};
mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(TASKS.addTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
