import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Home } from "./components/Home";
import {Wishlist} from './components/Wishlist'
import {Trips} from './components/Trips'
import {Inbox} from './components/Inbox'
import {Profile} from './components/Profile'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Explore" component={Home} />
          <Tab.Screen name="Wishlist" component={Wishlist} />
          <Tab.Screen name="Trips" component={Trips} />
          <Tab.Screen name="Inbox" component={Inbox} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
