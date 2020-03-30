import React from 'react';
import { Text, View } from 'react-native';
import MainComponent from './components/MainComponent';

export default class App extends React.Component {
  
  state ={position : ''}
  constructor(props){
    super(props);
  }  
  componentDidMount(){

  }

	render() {
		return (  <MainComponent />
		);
	}
}
