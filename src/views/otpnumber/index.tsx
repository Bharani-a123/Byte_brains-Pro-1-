import React, {useRef, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './style';

interface OtpProps {
  navigation?: {
    navigate: (screen: string) => void;
  };
}

const Otp: React.FC<OtpProps> = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleConfirm = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);

    // Add OTP validation logic here if needed
    navigation?.navigate('Reset');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled">
        {/* KeyboardAvoidingView helps manage keyboard covering inputs */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <Text style={styles.header}>Enter the OTP</Text>
          <Text style={styles.subText}>
            We sent you an OTP. Please check your mobile number and complete the
            verification
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                ref={ref => (inputs.current[index] = ref)}
                returnKeyType="done"
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Otp;
