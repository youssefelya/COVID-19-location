import React from 'react';
import {View,Text} from 'react-native';
import MapInput from './MapInput';
export default class MapContainer  extends React.Component{

    state={
        region:{}
    }
    componentDidMount(){
    this.getInitialState();
    }
    getInitialState(){
        getLocation().then(data=>{
            this.updateState({
                latitude:data.latitude,
                longitude:data.longitude
            });
        });
    }
    updateState(location){
        this.setState({
            region:{
                latitude: location.latitude,
                longitude:location.longitude,
                latitudeDelta:0.003,
                longitudeDelta: 0.003,
            }
        })
    }

    getCoordsFromName(loc){
        this.updateState({
            latitude:loc.lat,
            longitude:loc.lng
        })
    }
    onMapRegionChange(region){
        this.setState({region});
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.4, height:'20%'}}>
                    <Text></Text>
                    <MapInput notifyChange={(loc)=>this.getCoordsFromName(loc)}/>
                </View>
                {this.state.region['latitude']?
                    <View style ={{flex:1}}></View>:null
                }
            </View>
        );
    }
}

export const getLocation=()=>{
    return new Promise(
        (resolve, reject)=>{
            navigator.geolocation.getCurrentPosition(
                (data)=>resolve(data.coords),
                (err)=>reject(err)
            )
        }
    )
}