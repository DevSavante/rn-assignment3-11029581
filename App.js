import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Card from './Card';
import TextCard from './TextCard';

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

  const textCards = [
    { title: 'Web development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Push ups', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
    { title: 'Mobile App development', subtitle: '' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <Text style={styles.minititletwo}>Ongoing Tasks</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.textCardsContainer}
      >
        {textCards.map((card, index) => (
          <View key={index} style={styles.cardWrapper}>
            <TextCard 
              title={card.title} 
              subtitle={card.subtitle} 
            />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f7f0e8',
    paddingTop: 70,
  },
  customBlock: {
    width: 393,
    height: 200,
    borderRadius: 30,
    backgroundColor: '#f7f0e8',
    opacity: 1,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    opacity: 1,
    marginBottom: 20,
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
    width: 26,
    height: 26,
    marginRight: 10,
  },
  minititle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    
  },
  cardsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  minititletwo: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 20,
    marginRight:215,
  },
  textCardsContainer: {
    paddingBottom: 20,
    paddingLeft:20,
    paddingRight:70,
  },
  cardWrapper: {
    
    marginBottom: 10,
  },
 
});


