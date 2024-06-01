import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.textContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 186,
    height: 192,
    marginLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'top',
    alignItems: 'left',
    opacity: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginLeft: 10,
    marginTop:10,
  },
  cardImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    alignItems: 'center',
    top: 50,
    left: 50,
  },
  
  cardSubtitle: {
    fontSize: 14,
    color: '#999',
    marginLeft: 10,
  },
});

export default Card;
