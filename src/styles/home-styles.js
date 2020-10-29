import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';
const styles = StyleSheet.create({
    descriptionContainer:{
        marginVertical: util.WP(3), 
    },
    textInput:{
        height: util.WP(20),
        padding: util.WP(2),
        width: '100%',
        borderWidth: 1,
        borderColor:util.BASE_COLOR,
        borderRadius:10,
        color: '#000000',
        fontSize: util.WP(4),
        marginVertical:util.WP(2)
    },
    submitButton:{
        alignSelf:'flex-end',
        width:util.WP(30)
    },
    todoText:{
        fontSize: util.WP(5),
        fontWeight:'600',
        marginVertical:util.WP(2),
        color:util.BASE_COLOR
    },
    todoCard:{
        margin:0,
        borderRadius:10,
        borderColor:util.BASE_COLOR,
        marginVertical:util.WP(2)
    },
    todosContainer:{
        maxHeight:util.HP(50),
        marginTop:util.WP(3)
    }
});

export default styles;
