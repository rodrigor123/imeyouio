'use strict';
/*jshint esversion: 6*//*jshint node: true*/
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux/actions'
export class TagSelect extends Component{

  constructor(props){
    super(props);
    this.state = {
    };
  };  

  render(){
    return(
      <View style={styles.container}>
        <Text>This is First Screem</Text>
      </View>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect((state) => {
  return {
  }
}, mapDispatchToProps)(TagSelect);
