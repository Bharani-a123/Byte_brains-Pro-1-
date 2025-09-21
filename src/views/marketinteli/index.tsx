import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import styles from './styles';

const colorBoxes = [
  '#F7961E', 
  '#FF3366',
  '#39C3A9', 
  '#66D1F6', 
  '#FBC312', 
];

const trendingImages = [
  {
    id: 'silkSaree1',
    source: require('../../assets/silk.jpg'), 
    title: 'Trending Silk Saree Designs',
  },
  {
    id:''
  },
];

const MarketIntelligence = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Market Intelligence</Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Explore trending patters & designs"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>Top colors in Rajasthan weddings</Text>
      <View style={styles.colorRow}>
        {colorBoxes.map((color, index) => (
          <View
            key={index.toString()}
            style={[styles.colorBox, {backgroundColor: color}]}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Trending Silk Saree Designs</Text>
      <FlatList
        data={trendingImages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Image
            source={item.source}
            style={styles.trendingImage}
            resizeMode="cover"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MarketIntelligence;
