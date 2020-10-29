import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyScrollView:{
    flexGrow: 1,
    // justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
    alignItems:'center'
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  sectionContainer: {
    paddingHorizontal: util.WP(5),
    paddingVertical: util.WP(3),
  },
  sectionTitle: {
    fontSize: util.WP(6),
    fontWeight: '600',
    color: util.DARK_GREY_COLOR,
  },
  sectionDescription: {
    fontSize: util.WP(4),
    fontWeight: '400',
    color: util.LIGHT_GREY_COLOR,
  },
});

export default styles;
