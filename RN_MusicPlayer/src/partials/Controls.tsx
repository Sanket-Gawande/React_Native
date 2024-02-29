import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, {
  PlaybackState,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

export default function Controls() {
  const {duration, position} = useProgress();
  const playBackState = usePlaybackState();
  const skipToNext = async () => await TrackPlayer.skipToNext();
  const skipToPrev = async () => await TrackPlayer.skipToPrevious();

  const toggleState = async (playBack: PlaybackState) => {
    const current = await TrackPlayer.getActiveTrackIndex();
    if (current !== undefined) {
      if (playBack.state === State.Paused || playBack.state === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  async function seekTo(value: number) {
    await TrackPlayer.seekTo(value);
  }

  const ICON_STATE = useMemo(
    () => ({
      ready: 'play',
      paused: 'play',
      playing: 'pause',
      error: 'alert',
    }),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider
          minimumValue={0}
          value={position}
          maximumValue={duration}
          onSlidingComplete={seekTo}
          thumbTintColor="#fff"
          maximumTrackTintColor="#ddd"
          minimumTrackTintColor="#eee"
        />
        <View style={styles.time}>
          <Text style={styles.timeText}>
            {new Date(position * 1000).toISOString().substring(14, 19)}
          </Text>
          <Text style={styles.timeText}>
            {new Date(duration * 1000).toISOString().substring(14, 19)}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={skipToPrev}>
          <Icon color="#fff" name={'play-skip-back'} size={36} />
        </TouchableOpacity>

        {playBackState.state === 'buffering' ? (
          <TouchableOpacity style={styles.mainButton}>
            {<ActivityIndicator size={32} color="#222" />}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => toggleState(playBackState as PlaybackState)}>
            <Icon
              color="#222"
              name={
                ICON_STATE[playBackState.state as typeof ICON_STATE & undefined]
              }
              size={32}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={skipToNext}>
          <Icon color="#fff" name={'play-skip-forward'} size={36} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  container: {gap: 8},
  slider: {
    padding: 10,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  timeText: {color: '#fff'},
  mainButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 60,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
