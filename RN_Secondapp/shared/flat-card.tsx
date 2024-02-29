import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const colors = [
  {name: 'Tomato', color: '#FF6347'},
  {name: 'Teal', color: '#008080'},
  {name: 'SlateBlue', color: '#6A5ACD'},
  {name: 'SteelBlue', color: '#4682B4'},
  {name: 'MediumSeaGreen', color: '#3CB371'},
  {name: 'MediumPurple', color: '#9370DB'},
  {name: 'SkyBlue', color: '#87CEEB'},
  {name: 'DarkCyan', color: '#008B8B'},
  {name: 'MediumTurquoise', color: '#48D1CC'},
  {name: 'IndianRed', color: '#CD5C5C'},
];

const FlatCard = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={[styles.main, styles.elevation]}>
      {colors.map(item => (
        <View
          key={item.name}
          style={[styles.card, {backgroundColor: item.color}]}>
          <Text style={styles.cardTittle}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  main: {
    gap: 8,
    flexDirection: 'row',
    display: 'flex',
  },
  card: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  elevation: {
    elevation: 4,
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.4,
    shadowColor: 'green',
    shadowRadius: 10,
  },
  cardTittle: {
    fontWeight: '500',
  },
});
