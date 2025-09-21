import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActionButton = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#000" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    width: 80,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
});

export default ActionButton;
