import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import styles from '../../styles';
import * as util from '../../utilities'
import * as TASKS from '../../store/actions';
import {ScrollView,View,Text,SafeAreaView,TextInput,FlatList} from 'react-native';
import Header from '../header/header'
import {Button,Card} from 'react-native-elements'
class Home extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });
  constructor(props) {
    super(props);
    this.state = {
      description:'',
      refresh:false
    };
  }
  onSave(){
    if(this.state.description !== ''){
      var previous = this.props.todo_listing
      previous.push({todo:this.state.description})
      this.props.addTodo(previous)
      this.setState({description:''})
      this.setState({refresh:!this.state.refresh})
      util.showToast('Todo Saved !')
    } else {
      util.showToast('Please write something first !')
    }  
  }
  render() {
    return (
      <SafeAreaView style={styles.common.body}>
        <Header clear={true} />
        <View
          style={styles.common.bodyScrollView}>
            <View style={styles.common.sectionContainer}>
              <Text style={styles.common.sectionTitle}>To-Do Entry</Text>
              <View style={styles.home.descriptionContainer}>
                <Text style={styles.common.sectionDescription}>
                  Please enter your To-Do Item
                </Text>
              </View>
              <TextInput
                style={styles.home.textInput}
                multiline={true}
                numberOfLines={4}
                value={this.state.description}
                placeholder={'Write here...'}
                placeholderTextColor="grey"
                returnKeyType='done'
                onChangeText={text => {
                  this.setState({
                    description: text,
                  });
                }}
              />
              <Button
                title="Save"
                type="outline"
                style={styles.home.submitButton}
                onPress={()=> this.onSave()}
              />

              {this.props.todo_listing && this.props.todo_listing.length>0?
                <FlatList
                  style={styles.home.todosContainer}
                  extraData={this.state.refresh}
                  data={this.props.todo_listing}
                  renderItem={({item: rowData}) => {
                    return (
                      <Card containerStyle={styles.home.todoCard}>
                        <Text style={styles.home.todoText}>{rowData.todo}</Text>
                      </Card>
                    );
                  }}
                  keyExtractor={(item, index) => `${index}`}
                />
              :
                <Text style={styles.home.todoText}>No To-Do yet !</Text>
              }
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
mapStateToProps = state => {
  return {
    todo_listing:state.listings.todo_listing
  };
};
mapDispatchToProps = dispatch => {
  return {
    addTodo: (payload) => dispatch(TASKS.addTodo(payload)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
