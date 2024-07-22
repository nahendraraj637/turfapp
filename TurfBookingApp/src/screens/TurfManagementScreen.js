import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const TurfManagementScreen = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleAddTurf = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/turfs', { name, location, price });
      alert(response.data.message);
    } catch (error) {
      alert('Error adding turf');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Your Turf</Text>
      <TextInput
        placeholder="Turf Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />
      <Button title="Add Turf" onPress={handleAddTurf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default TurfManagementScreen;

