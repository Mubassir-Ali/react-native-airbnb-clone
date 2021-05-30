import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import data from '../assets/Airbnb_images';

const { width, height } = Dimensions.get('screen');
const IMAGE_WIDTH = width *0.5;
const IMAGE_HEIGHT = height * 0.3;
export function Card({title, image}) {
	return (
		<View style={styles.container}>
			
			<Image source={{ uri: image }} style={styles.image} />
			<Text>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
    container:{
       justifyContent:'center'
        
    },
	image: {
		width:IMAGE_WIDTH,
		height: IMAGE_WIDTH,
        borderRadius:8,
        resizeMode:'cover',
        marginRight:20   

        
        
	},
 
});
