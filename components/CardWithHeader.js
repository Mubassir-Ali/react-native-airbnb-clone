import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const IMAGE_WIDTH = width * 0.9;
const IMAGE_HEIGHT = width * 0.6;

const imageUrl =
  "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_13/2378666/180327-design-interior-ac-633p-2378666.jpg";

export function CardWithHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Become a Host</Text>
        <Text style={styles.textDescreption}>
          Earn extra income and unlock new opportunities by sharing your space.
        </Text>
        <Pressable style={styles.learMoreButton}><Text style={styles.learMoreText}>Learn more</Text></Pressable>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    paddingBottom: 40,
  },
  headerContainer: {
    backgroundColor: "#222",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
   
  },
  textDescreption: {
    color: "#ddd",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  learMoreButton:{
      backgroundColor:'#fff',     
      padding:10,      
      borderRadius:5,
      marginTop:10,
      
  },
  learMoreText:{
      fontWeight:'bold',
      color:'#333'
  }
});
