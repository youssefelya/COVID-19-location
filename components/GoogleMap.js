
import React from 'react';
import {  View } from 'react-native';
import MapView from "react-native-maps";

class GoogleMap extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(<View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}></MapView>
            </View>
        );
    }
}
export default GoogleMap;