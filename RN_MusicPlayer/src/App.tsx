import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Controls from './partials/Controls';
import { SetupPlayer, addTrack } from './utils/music.service';
import music from './constants/music';
import SongDetails from './partials/Details';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  async function setup() {
    let isSetup = await SetupPlayer();
    if (isSetup) {
      await addTrack(music);
    }
    setIsPlayerReady(isSetup);
    setTrack((await TrackPlayer.getTrack(0)) as Track);
  }

  useEffect(() => {
    setup();
  }, []);

  const [track, setTrack] = useState<Track | null>(null);
  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    const t = await TrackPlayer.getTrack(event.index as number);
    setTrack(t ?? null);
  });
  if (!isPlayerReady) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ padding: 10 }} />
      <StatusBar
        translucent
        backgroundColor={'#171010'}
        barStyle={'light-content'}
      />
      <Text>App</Text>
      <SongDetails track={track} />
      <Controls />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171010',
  },
});
export default App;
