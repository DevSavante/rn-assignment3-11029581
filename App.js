import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.customBlock}>
      <View style={styles.row}>
        <Image 
          style={styles.profilePicture}
          source={require('./assets/person.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hello, devs</Text>
          <Text style={styles.subtitle}>14 tasks opened</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#999"
        />
        <Image
        style={styles.filterIcon}
        source={require('./assets/Filter.png')}
        />
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f0e8',
  },
  customBlock: {
    width: 393,
    height: 200,
    position: 'absolute',
    top: 68,
    left: 9,
    borderRadius: 30,
    backgroundColor: '#f7f0e8',
    opacity: 1,
   
   
    
  },
  row: {
    flexDirection: 'row',
    marginBottom: 0,
  },

  profilePicture: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 50, // To make it a circle
    marginRight: 20, // Spacing between the image and the text
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 48,
    marginTop: 34,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    opacity: 1,
  },
  searchBar: {
    flex: 1,
    paddingLeft: 10,
    height: '100%',
    color: '#000',
  },
  filterIcon: {
    width: 24, // Adjust size as needed
    height: 24, // Adjust size as needed
    marginRight: 10,
  },
});



