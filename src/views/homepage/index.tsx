import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import styles from './styles';
import MenuComponent from '../../components/menubar'; 

const data = [
  {
    image: require('../../assets/plates.jpg'),
    caption: '“From Village Workshops to World Stages”',
  },
  {
    image: require('../../assets/vases.jpg'),
    caption: '“Crafted with love, Inspired by Culture”',
  },
  {
    image: require('../../assets/baskets.jpg'),
    caption: '“Tradition isn’t preserved in books, it’s crafted in hands.”',
  },
  {
    image: require('../../assets/bug.jpg'),
    caption: '“Handmade isn’t a product, it’s a promise.”',
  },
  {
    image: require('../../assets/toys.jpg'),
    caption: '“Heritage lives through artisan hands.”',
  },
];

const Homepage = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation(); 

  const handleMenuPress = () => {
    setMenuVisible(true);
  };

  return (
    <>
      <MenuComponent
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation} 
      />

      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
            <Text style={styles.menuIcon}>≡</Text>
          </TouchableOpacity>
          <Text style={styles.title}>CRAFTECHO</Text>
          <View style={styles.menuButton} />
        </View>

        {data.map(({image, caption}, index) => (
          <View key={index} style={styles.section}>
            <Image source={image} style={styles.image} resizeMode="cover" />
            <Text style={styles.caption}>{caption}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Homepage;
