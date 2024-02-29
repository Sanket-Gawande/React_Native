import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {Track} from 'react-native-track-player';

interface ISongDetail {
  track: Track | null;
}
export default function SongDetails({track}: ISongDetail) {
  if (!track) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      {track ? (
        <>
          <Text style={styles.heading}>Playlist name</Text>
          <Image style={styles.thumbnail} source={{uri: track.artwork}} />
          <Text style={styles.title}>{track?.title}</Text>
          <Text style={styles.artist}>Arijit Singh</Text>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    alignSelf: 'center',
    width: '90%',
  },
  thumbnail: {
    aspectRatio: 1,
    marginVertical: 40,
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginTop: 40,
  },
  heading: {
    fontSize: 14,
    color: '#ddd',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginBottom: 20,
  },
  artist: {
    fontSize: 18,
    color: '#bbb',
  },
});
