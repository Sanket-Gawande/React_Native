import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PLACES from './constants/places';

const Card = () => {
  function renderCard(_item: {item: (typeof PLACES)[0]}) {
    const item = _item.item;
    return (
      <View key={item.name} style={styles.card}>
        <Image style={styles.cardImage} source={{uri: item.image}} />
        <View style={styles.content}>
          <Text style={styles.cardTittle}>{item.name}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.cardText, {color:"#fff"}]}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.main}
      horizontal
      data={PLACES}
      renderItem={renderCard}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {},
  card: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    backgroundColor: '#222',
  },
  elevation: {
    elevation: 4,
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.4,
    shadowColor: 'green',
    shadowRadius: 10,
  },
  content: {
    width: '100%',
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    objectFit: 'cover',
  },
  cardTittle: {
    fontWeight: '500',
    fontSize: 18,
  },
  cardText: {
    fontSize: 14,
    opacity: 0.8,
  },
});
