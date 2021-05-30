import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, Pressable, ScrollView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import data, { imageData } from '../assets/Airbnb_images';
import { Card } from './Card';

const { width, height } = Dimensions.get('screen');
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = height * 0.65 - 40;

export function Home() {
	return (
		<ScrollView style={styles.content}>
			<View style={styles.homeContainer}>
				<Image source={{ uri: data[0] }} style={styles.image} />
				<View style={styles.searchContainer}>
					<Feather name="search" size={16} color="#f00" />
					<TextInput placeholder="Where are you going?" style={styles.searchInput} />
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>The Greatest Outdoors</Text>
					<Text style={styles.textParagraph}>Wishlists curated by Airbnb</Text>
					<Pressable style={styles.getInspiredButton}>
						<Text style={styles.getInspiredButtonText}>Get Inspired</Text>
					</Pressable>
				</View>
			</View>
			<View>
				<FlatList
					keyExtractor={(_, index) => index.toString()}
					data={imageData}
					pagingEnabled
					horizontal
					snapToInterval={width * 0.5}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => <Card image={item.image} title={item.title} />}
					style={styles.cardContainer}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		top: 40
	},
	homeContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: IMAGE_WIDTH,
		height: IMAGE_HEIGHT
	},
	textContainer: {
		position: 'absolute',
		top: 140,
		// backgroundColor:'#ddd',
		width: '90%'
	},
	title: {
		color: '#fff',
		fontSize: 50,
		fontWeight: 'bold',
		lineHeight: 50
	},
	textParagraph: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 20
	},
	getInspiredButton: {
		backgroundColor: '#000',
		borderRadius: 10,
		height: 40,
		width: '35%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	getInspiredButtonText: {
		color: '#fff'
	},
	searchContainer: {
		flexDirection: 'row',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 10,
		height: 40,
		backgroundColor: '#fff',
		width: '80%',
		borderRadius: 20,
		zIndex: 100
	},
	searchInput: {
		marginLeft: 8,
		fontSize: 16
	},
	cardContainer: {
		marginVertical: 20,
		paddingHorizontal: 20
	}
});
