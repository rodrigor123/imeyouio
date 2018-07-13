'use strict';
/*jshint esversion: 6*//*jshint node: true*/
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux/actions'
export class Splash extends Component{

  constructor(props){
    super(props);
    this.state = {
    };
  };  

  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },  
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect((state) => {
  return {
  }
}, mapDispatchToProps)(Splash);
