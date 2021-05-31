import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export  function Wishlist() {
    return (
        <View style={styles.container}>
            <Text>Wishlist</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: "#888",
      justifyContent:'center',
      alignItems:'center'
    },
  });
  