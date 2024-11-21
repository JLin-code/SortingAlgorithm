import React, { useState } from 'react';
import { SortingAlgorithms } from './helpers/SortingAlgorithms.js';
import { sleep } from './helpers/util.js';

const App = () => {
  const [nBars, setNBars] = useState(10);
  const [bars, setBars] = useState([]);
  const [swaps, setSwaps] = useState([]);

  const sortingAlgorithms = new SortingAlgorithms();

  const generateBars = () => {
    const newBars = Array(nBars).fill(0).map(() => ({
      width: 20,
      height: Math.floor(Math.random() * 200) + 1
    }));
    setBars(newBars);
  };

  const swapBars = async (i, j) => {
    const newBars = [...bars];
    const temp = newBars[i];
    newBars[i] = newBars[j];
    newBars[j] = temp;
    setBars(newBars);
    await sleep(300);
  };

  const solve = async (algorithm) => {
    let newSwaps = [];
    switch (algorithm) {
      case 'bubbleSort':
        newSwaps = await sortingAlgorithms.bubbleSort(bars);
        break;
      case 'selectionSort':
        newSwaps = await sortingAlgorithms.selectionSort(bars);
        break;
      case 'quickSort':
        newSwaps = await sortingAlgorithms.quickSort(bars);
        break;
      default:
        return;
    }
    for (let i = 0; i < newSwaps.length; i++) {
      const { firstPosition, lastPosition } = newSwaps[i];
      if (firstPosition !== lastPosition) {
        await swapBars(firstPosition, lastPosition);
      }
    }
  };

  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <input
        type="number"
        value={nBars}
        onChange={(e) => setNBars(Number(e.target.value))}
        min="1"
        max="100"
      />
      <button onClick={generateBars}>Generate Bars</button>
      <select
        onChange={(e) => {
          solve(e.target.value);
        }}
      >
        <option value="bubbleSort">Bubble Sort</option>
        <option value="selectionSort">Selection Sort</option>
        <option value="quickSort">Quick Sort</option>
      </select>
      <div id="stage" style={{ display: 'flex', justifyContent: 'center' }}>
        {bars.map((bar, index) => (
          <div
            key={index}
            style={{
              width: `${bar.width}px`,
              height: `${bar.height}px`,
              marginLeft: '5px',
              backgroundColor: 'blue'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
