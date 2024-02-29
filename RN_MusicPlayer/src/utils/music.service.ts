import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

export async function MusicService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
}

export async function SetupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTrack(music: Music[]) {
  const MusicToTrack = music.map(obj => ({
    url: obj.preview,
    artwork: obj.album.cover_medium,
    title: obj.title,
    duration: obj.duration,
  }));
  TrackPlayer.add(MusicToTrack);
  TrackPlayer.setRepeatMode(RepeatMode.Off);
}
