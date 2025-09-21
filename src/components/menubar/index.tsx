import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import {styles} from './styles';

interface MenuComponentProps {
  visible: boolean;
  onClose: () => void;
  navigation?: any; 
}

export const MenuComponent: React.FC<MenuComponentProps> = ({
  visible,
  onClose,
  navigation,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.closeArea} onPress={onClose} />
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation?.navigate('ContentStudio');
              onClose(); 
            }}>
            <Ionicons name="user" size={20} />
            <Text style={styles.menuText}>Content Studio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation?.navigate('Publish');
              onClose();
            }}>
            <Ionicons name="globe" size={20} />
            <Text style={styles.menuText}>Publish</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation?.navigate('MarketIntelligence');
              onClose();
            }}>
            <MaterialCommunityIcons name="bar-chart-2" size={20} />
            <Text style={styles.menuText}>Market Intelligence</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation?.navigate('Profile');
              onClose();
            }}>
            <FontAwesome5 name="user" size={20} />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation?.navigate('Login');
              onClose();
            }}>
            <MaterialCommunityIcons name="chart-line" size={20} />
            <Text style={styles.menuText}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MenuComponent;
