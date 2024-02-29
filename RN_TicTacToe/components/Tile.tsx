import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Tile({
  symbol,
  setClick,
}: {
  symbol: string;
  setClick: any;
  coords: [number, number];
}) {
  return (
    <TouchableOpacity
      disabled={!!symbol}
      style={styles.tile}
      onPress={setClick}>
      <Text style={styles.text}>{symbol}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: 10,
    aspectRatio: 1,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 50, fontFamily: 'serif'},
});
