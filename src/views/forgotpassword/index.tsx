import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  View,
  Alert,
} from 'react-native';
import styles from './style';

interface ForgotPasswordProps {
  navigation?: {
    navigate: (screen: string) => void;
  };
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email.trim() !== '') {
      // TODO: add OTP sending logic here
      navigation?.navigate('OTPNumber');
    } else {
      Alert.alert('Validation', 'Please enter your email');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled">
        <View style={{padding: 24, justifyContent: 'center'}}>
          <Text style={styles.title}>Forgot Password?</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
