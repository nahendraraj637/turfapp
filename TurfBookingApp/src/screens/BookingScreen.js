import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const BookingScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', { date, time });
      alert(response.data.message);
    } catch (error) {
      alert('Error booking turf');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Turf</Text>
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <Button title="Book Now" onPress={handleBooking} />
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

export default BookingScreen;

