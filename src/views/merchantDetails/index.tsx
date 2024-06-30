import React from 'react';
import {Text, ScrollView, SafeAreaView} from 'react-native';
import styles from './style';

interface MerchantDetailsProps {
  navigation?: any;
}

const MerchantDetails: React.FC<MerchantDetailsProps> = props => {
  const {navigation = () => false} = props;

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>MerchantDetails component</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchantDetails;
