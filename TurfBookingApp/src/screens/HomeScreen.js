import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Turf Booking</Text>
      <Button
        title="Book a Turf"
        onPress={() => navigation.navigate('Booking')}
      />
      <Button
        title="Manage My Turf"
        onPress={() => navigation.navigate('TurfManagement')}
      />
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
});

export default HomeScreen;

