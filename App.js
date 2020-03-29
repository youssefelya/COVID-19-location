import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen';
import GooglePosition from "./components/GooglePosition";
import { TabNavigator} from 'react-navigation';
import MoreInfoVictim from './components/MoreInfoVictim';
import MapContainer from './components/MapContainer';
import {StatusBar} from "react-native-web";

const Tabs = TabNavigator({
      Map :  {screen: GooglePosition},
      Login : {screen: LoginScreen},
  MoreInfoVictim : {screen: MoreInfoVictim},
  MapContainer : {screen : MapContainer}
    }, {
      //tabBarPosition:'up',
      tabBarOptions:{
        showIcon : true,
        showLabel: false,
        pressColor: "",
        style :{
          backgroundColor: "#a2273c",
          borderTopWidth: 1,

        }
      }
    }
)
export default function App() {
/*
  return(<MapContainer  />
  );
*/
    return (<View style={{flex:1, marginBottom:20}}>
          <StatusBar hidden={true} />
           <Tabs />
         </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
