import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Config from "react-native-config";

export default function App() {
  const getBackgroundColor = () => {
    switch (Config.API_NAME) {
      case 'DEVELOPMENT':
        return '#ff0000'; // Red background for DEVELOPMENT
      case 'STAGING':
        return 'yellow'; // Blue background for STAGING
      case 'PRODUCTION':
        return '#2ecc71'; // Green background for PRODUCTION
      default:
        return '#ffffff'; // Default to white background
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Welcome to {Config.API_NAME} Environment
        </Text>
        <Text style={styles.text}>
          The API URL is {Config.API_URL}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#ffffff', // White box
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#2c3e50', // Dark gray text
    marginBottom: 10,
    fontSize:18
  },
});
