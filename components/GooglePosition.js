import React, { Component } from "react";
import {Image, StyleSheet, Text, View, Alert, TouchableOpacity} from "react-native";
import MapView, {Marker} from "react-native-maps";
import * as Permissions from 'expo-permissions';

export default class GooglePosition extends Component {
    state = {
        location: null,
        points : {
            latitude:null ,
            longitude:-7.5898434,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.591,
        },
    };
    constructor(props) {
        super(props);
       this.findCoordinates();
    }
    // static navigationOptions={
    //     tabBarIcon:()=>{
    //         return <Image source = {require('./icons/map.png')} style={{width:20, height: 20}} />}
    // }

 /*   async obtainLocationPermission(){
        let permission = await Permissions.getAsync(Permissions.LOCATION);
        if(permission.status !== 'granted'){
            permission = await Permissions.askAsync(Permissions.LOCATION);
            if(permission.status != 'granted'){
                Alert.alert('Permission not granted to get location');
            }else{}
        }
        return permission;
    }*/

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                const acc = position.coords.accuracy;
                const region = regionFrom(latitude, longitude, acc);
                this.setState({location: location, points: region});
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    };
    render() {
        return (
            <View style={{flex:1}}>
                {this.state.points.latitude 
                ?<MapView
                    style={{ flex: 1 }}
                    initialRegion={
                        this.state.points
                    }>
                        <Marker
                            coordinate={{
                                latitude: 32.53432451735201,
                                longitude: -1.9690750709385767
                            }}
                            title={'Hopitale Hassan 2'}
                        />
                </MapView>  : 
                <TouchableOpacity style ={styles.container}
                                        onPress={this. findCoordinates} >
                        <Text>Please Activate your location</Text>
                    </TouchableOpacity>}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

function regionFrom(lat, lon, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
        latitude: lat,
        longitude: lon,
        latitudeDelta: Math.max(0, latDelta),
        longitudeDelta: Math.max(0, lonDelta)
    };
}

