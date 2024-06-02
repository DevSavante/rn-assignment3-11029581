import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextCard = ({ title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    width: 354,
    height: 128,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: '#E8D1BA',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  
  cardTitle: {
   
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
      marginLeft: 70,
      marginRight:200,
      marginTop:50,
      flex: 20,
      flexShrink: 11,
      textAlign: 'center',
      width: '70%',
      whiteSpace: 'nowrap',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#999',
    marginLeft: 10,
    flex:20,
    flexShrink: 11,
    width: '25',
    whiteSpace: 'nowrap',
  },
});

export default TextCard;
