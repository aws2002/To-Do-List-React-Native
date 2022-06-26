import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo List 🤔</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    display: 'flex',
    justifyContent:'center',
    backgroundColor: '#333',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});