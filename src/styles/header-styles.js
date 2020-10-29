import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerIconContainer: {
    alignItems: 'center',
    width: util.WP(12),
  },
  headerIcon: {height: util.WP(15)},
  headerLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: util.WP(76),
  },
  headerTitle:{
    textAlign: 'center',
    width: '100%',
    fontWeight:'600',
    fontSize: util.WP(5),
  }
});

export default styles;
