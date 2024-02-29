import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Tile from './components/Tile';
import Snackbar from 'react-native-snackbar';
import winningCombinations from './components/winningCombination';

const App = () => {
  const [tileGrid, setTileGrid] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [turn, setTurn] = useState(true);
  const [steps, setSteps] = useState<{name: 'X' | 'O'; coords: string}[]>([]);
  const [winner, setWinner] = useState('');

  function handleTileClick(r: number, c: number, col: string) {
    setTurn(x => !x);
    tileGrid[r][c] = turn ? 'X' : 'O';
    setTileGrid(() => [...tileGrid]);
    setSteps(arr => [...arr, {name: turn ? 'X' : 'O', coords: `${r}${c}`}]);
  }

  function stepBack() {
    if (steps.length) {
      const rc = steps.pop()?.coords.split('');
      if (rc) {
        const [r, c] = rc;
        setTurn(x => !x);
        tileGrid[+r][+c] = '';
        setTileGrid(() => [...tileGrid]);
        setSteps(() => [...steps]);
      }
    } else
      Snackbar.show({
        text: 'Empty states',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 200,
      });
  }

  function replay() {
    setSteps([]);
    setTurn(true);
    setTileGrid([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  }

  const checkWinner = useCallback(() => {
    if (steps.length > 4) {
      const lastTurn = steps
        .filter(obj => obj.name === (turn ? 'O' : 'X'))
        .map(obj => obj.coords);

      for (let comb of winningCombinations) {
        let tiles = lastTurn.filter(position =>
          comb.find(numberedArray => numberedArray.join('') === position),
        );
        if (tiles.length >= 3) {
          Snackbar.show({
            text: (turn ? 'O' : 'X') + ' Won the game!',
            duration: Snackbar.LENGTH_LONG,
            marginBottom: 200,
          });
          setTimeout(() => {
            replay();
            console.log('clearing');
          }, 1000);
        }
      }
    }
  }, [steps]);

  useEffect(() => {
    checkWinner();
  }, [steps, checkWinner]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.tittle}>Tic Tac Toe</Text>
        <Text style={styles.text}>{turn ? 'X' : 'O'}'s turn</Text>
        <View>
          {tileGrid.map((row, r) => {
            return (
              <View key={r} style={styles.row}>
                {row.map((col, c) => (
                  <Tile
                    coords={[r, c]}
                    setClick={() => handleTileClick(r, c, col)}
                    symbol={col}
                    key={c}
                  />
                ))}
              </View>
            );
          })}
        </View>
        <View style={styles.footer}>
          {winner && <Text style={styles.result}>{winner}</Text>}
          <View style={styles.footerRow}>
            <TouchableOpacity onPress={stepBack} style={{flex: 1}}>
              <Text style={[styles.button, styles.normal]}>Step Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={replay} style={{flex: 1}}>
              <Text style={[styles.button, styles.danger]}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {padding: 10, backgroundColor: '#eee', height: '100%'},
  tittle: {
    fontWeight: '500',
    fontSize: 28,
    textAlign: 'center',
    paddingVertical: 16,
  },
  text: {fontSize: 16, padding: 6},
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'tomato',
    color: '#fff',
    fontSize: 18,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  danger: {backgroundColor: 'tomato'},
  normal: {backgroundColor: '#333'},
  result: {
    color: 'white',
    backgroundColor: '#444',
    padding: 16,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 8,
  },
  footer: {marginTop: 'auto'},
  footerRow: {flexDirection: 'row', gap: 6, width: '100%'},
});
