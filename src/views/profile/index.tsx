import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import styles from './style';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [file, setFile] = useState<any>(null);
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('');
  const [location, setLocation] = useState('');

  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [types.images, types.pdf, types.doc, types.docx],
      });
      setFile(res[0]);
    } catch (err: any) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error(err);
      }
    }
  };

  const handleSave = () => {
    console.log({
      name,
      email,
      mobile,
      file,
      category,
      language,
      location,
    });
    Alert.alert('Profile Saved!', 'Your profile information has been saved.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Profile</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Additional Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Profile Picture</Text>
        <TouchableOpacity style={styles.fileButton} onPress={handleFilePick}>
          <Text style={styles.fileButtonText}>
            {file ? file.name : 'Choose File'}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Craft Category"
          value={category}
          onChangeText={setCategory}
        />

        <TextInput
          style={styles.input}
          placeholder="Language Preference"
          value={language}
          onChangeText={setLanguage}
        />

        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
