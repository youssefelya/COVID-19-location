import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';
import MapView, {Marker} from "react-native-maps";
import { SearchBar } from 'react-native-elements';


export default class MapContainer extends React.Component {
  
  state={
    data:'',
    positionCoordinate:{
      latitude: 32.52747722989272,
      longitude:  -1.9614244,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0421
    },
    placeSearch: '',
    hied:false
  }

  onChangeText(text){
    this.setState({placeSearch:text});
   // console.log('', this.state.placeSearch);
    if(text.length>0){
    this.setState({hied:true});
  }else{
    this.setState({hied:false});
  }
  }
  searchNow= ()=>{
  //  console.log(JSON.stringify(this.state.placeSearch));
    const key ='AIzaSyBnY9hS0qnAVrihYT_iKj8daNJ3uOdhtcs';
    const placeName = JSON.stringify(this.state.placeSearch);
    const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+placeName+'&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key='+key
    axios.get(url)
    .then(response => {
        console.log("################################################");
      console.log(response.data);
      this.setState({data:JSON.stringify(response.data)});
      this.setState({candidates:JSON.stringify(response.data.candidates[0].geometry.location.lat)});
      const latitude = response.data.candidates[0].geometry.location.lat;
      const longitude = response.data.candidates[0].geometry.location.lng
      const latitudeDelta =0.0922;
      const longitudeDelta = 0.0421
      this.setState({positionCoordinate:{latitude, longitude, latitudeDelta, longitudeDelta } });
    })
    .catch(error => {
      console.log(error);
    });
    this.setState({hied:false});
  }
  
  submitPlace = ()=>{
      const placeCordinate = this.state.positionCoordinate;
      Alert.alert('Thank you');
  }


  render(){
  return (
    <View style={{flex : 1}}>
    <View style={styles.searchContainer}>
    <SearchBar
    style={{flex:1,    width: 150,
    height: 450,}}
        placeholder="Type Here..."
        onChangeText={text => this.onChangeText(text)}
        value={this.state.placeSearch}
      />
      
      {this.state.hied?
      <View >
      <TouchableOpacity onPress={this.searchNow }>
        <Text style ={styles.searchButton}>Search</Text>
     </TouchableOpacity>
     </View>:null}
     <TouchableOpacity onPress={this.submitPlace }>
        <Text style ={styles.searchButton}>Submit place</Text>
     </TouchableOpacity>
    </View>

    <MapView
      style={{ flex: 1 }}
      initialRegion={this.state.positionCoordinate
      }
      region={this.state.positionCoordinate}
      > 

    </MapView>
    </View>
    
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer:{
    marginTop:20
  },

  searchButton:{
    marginEnd:1,
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    paddingEnd:22,
    paddingHorizontal:11,
    textAlign:'center',
  }
});
