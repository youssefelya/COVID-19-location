import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


export default class MapInput extends React.Component{
    render(){
            return(<View>
                    <GooglePlacesAutocomplete 
                    placeholder= 'Search'
                    minLength={2}
                    autoFocus={true}
                    returnKeyType={'search'}
                    listViewDisplayed={false}
                    fetchDetails={true}
                    onPress={(data, details=null)=>{
                        this.props.notifyChange(details.geometry.location);
                    }
                    }
                    query={{
                        key: 'AIzaSyBnY9hS0qnAVrihYT_iKj8daNJ3uOdhtcs',
                        language:'en'
                    }}
                    nearbyPlacesAPI='GooglePlaceSearch'
                    debounce={200}
                    />    
            </View>
            );
    }
}