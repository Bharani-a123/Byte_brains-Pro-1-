// screens/HomeScreen.tsx
import * as React from 'react';
import {
  Alert,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import CustomTextInput from '../../components/common/input';
import MobileNumberInput from '../../components/common/mobileInput';
import styles from './style';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = () => {
  const [state, setState] = React.useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    isFocused: {
      name: false,
      mobile: false,
      email: false,
      address: false,
    },
  });

  const onChange = (key: string, value: string) => {
    setState({...state, [key]: value});
  };

  const onFocusChange = (key: string, value: boolean) => {
    setState(prevState => ({
      ...prevState,
      isFocused: {...prevState.isFocused, [key]: value},
    }));
  };
  return (
    <View style={styles.overAllContainer}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <View style={styles.backgroundContainerSx}>
              <Image
                width={267}
                height={169.94}
                source={require('../../assets/Group.png')}
                alt=""
              />
              <View style={styles.textBoxSx}>
                <Text style={styles.headerTextSx}>
                  Earn loyalty for every purchase
                </Text>
              </View>
            </View>
            <View style={styles.drawerStyle}>
              <Text style={styles.drawerTitle}>Profile details</Text>
              <Text style={styles.descriptionText}>
                Please provide your basic details to proceed further
              </Text>
              <View>
                <CustomTextInput
                  label="Name"
                  value={state.name}
                  onChangeText={(value: any) => onChange('name', value)}
                  setIsFocused={(value: boolean) =>
                    onFocusChange('name', value)
                  }
                  isFocused={state.isFocused.name}
                  placeHolder="Enter Your Name"
                />
                <MobileNumberInput
                  value={state.mobile}
                  label="Mobile Number"
                  setIsFocused={(value: boolean) =>
                    onFocusChange('mobile', value)
                  }
                  isFocused={state.isFocused.mobile}
                  onChangeText={(value: any) => onChange('mobile', value)}
                  placeHolder="Enter Your Mobile Number"
                  keyboardType="phone-pad"
                />

                <CustomTextInput
                  label="Email"
                  value={state.email}
                  onChangeText={(value: any) => onChange('email', value)}
                  setIsFocused={(value: boolean) =>
                    onFocusChange('email', value)
                  }
                  isFocused={state.isFocused.email}
                  placeHolder="Enter Your Email"
                />
                <CustomTextInput
                  label="Address"
                  value={state.address}
                  onChangeText={(value: any) => onChange('description', value)}
                  setIsFocused={(value: boolean) =>
                    onFocusChange('description', value)
                  }
                  isFocused={state.isFocused.address}
                  placeHolder="Enter Address"
                  multiline={true}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Alert.alert('Button with adjusted color pressed')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
