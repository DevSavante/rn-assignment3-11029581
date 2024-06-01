import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Card from './Card';

export default function App() {
  const cards = [
    { title: 'Exercise', subtitle: '12 tasks', image: require('./assets/young woman working online.png') },
    { title: 'Study', subtitle: '12 tasks', image: require('./assets/young woman working at desk.png') },
    { title: 'Dance', subtitle: '5 tasks', image: require('./assets/young woman working online.png') },
    { title: 'Cook', subtitle: '6 tasks', image: require('./assets/young woman working online.png') },
    { title: 'Music', subtitle: '15 tasks', image: require('./assets/young woman working online.png') },
    { title: 'Work', subtitle: '4 tasks', image: require('./assets/young woman working online.png') },
    { title: 'Eat', subtitle: '20 tasks', image: require('./assets/young woman working online.png') },
    { title: 'Code', subtitle: '3 tasks', image: require('./assets/young woman working online.png') },
  ];
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
      <Image
            style={styles.magnifyingGlassIcon}
            source={require('./assets/WhatsApp Image 2024-06-01 at 12.05.37_f514fea9.jpg')}
        />
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
        <Text style={styles.minititle}>Categories</Text>
    </View>
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
       {cards.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            subtitle={card.subtitle} 
            image={card.image} 
          />
        ))}
      </ScrollView>
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
  magnifyingGlassIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
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
  minititle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 21,
    marginLeft: 10,
  },
  cardsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 260,
    paddingBottom: 10,
  },
});



