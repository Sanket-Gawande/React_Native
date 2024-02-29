/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import ReactNativeTrackPlayer from "react-native-track-player"
import { MusicService } from './src/utils/music.service';
AppRegistry.registerComponent(appName, () => App);
ReactNativeTrackPlayer.registerPlaybackService(() => MusicService)