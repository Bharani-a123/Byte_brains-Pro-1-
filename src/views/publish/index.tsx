import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';

const accounts = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: require('../../assets/instagram.jpg'), 
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: require('../../assets/facebook.jpg'),
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: require('../../assets/whatsapp.jpg'),
  },
];

const Publish = () => {
  const renderItem = ({item}: {item: (typeof accounts)[0]}) => (
    <TouchableOpacity style={styles.accountRow}>
      <View style={styles.accountInfo}>
        <Image source={item.icon} style={styles.icon} resizeMode="contain" />
        <Text style={styles.accountName}>{item.name}</Text>
      </View>
      <Text style={styles.chevron}>{'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Publish</Text>
      <Text style={styles.subHeading}>
        One-tap:share to your linked accounts
      </Text>

      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Publish;
