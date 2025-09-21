import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from '../../components/action';
import styles from './styles'
const ContentStudio = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Content Studio</Text>

      {/* Center text */}
      <View style={styles.center}>
        <Text style={styles.helpText}>What can I help with?</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <ActionButton icon="camera-outline" label="Camera" onPress={() => {}} />
        <ActionButton icon="image-outline" label="Photos" onPress={() => {}} />
        <ActionButton
          icon="document-attach-outline"
          label="Files"
          onPress={() => {}}
        />
      </View>

      {/* Bottom input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask anything"
          value={message}
          onChangeText={setMessage}
        />
      </View>
    </View>
  );
};
export default ContentStudio;
