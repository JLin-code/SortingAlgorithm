import { sleep } from './helpers/util.js';
import { SortingAlgorithms } from './helpers/SortingAlgorithms.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional: Your styles for the page

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure there's a div with id "root" in index.html
);


let nBars = 10

let numberBars = document.getElementById('numberBars');

const stage = document.getElementById('stage');

stage.style.width = `${nBars * 30}px`;

const selectAlgorithm = document.getElementById('selectAlgorithm');

const generateBtn = document.getElementById('generateBtn');
const solveBtn = document.getElementById('solveBtn');

let bars = []
let barsDivs = []

const sortingAlgorithms = new SortingAlgorithms({ })

const start = () => {
  stage.innerHTML = '';

  bars = Array(nBars).fill(0).map(_ => {
    return{
      width: 20,
      height: Math.floor(Math.random() * 200) + 1
    }
  })


  barsDivs = []

  for (let i = 0; i <bars.length; i++) {
    const bar = document.createElement('div')
    bar.style.width = `${bars[i].width}px`;
    bar.style.height = `${bars[i].height}px`;
    bar.style.left = `${5 + i * 30}px`;
    bars[i] = {...bars[i], position: i}
    bar.classList.add('bar');
    barsDivs.push(bar);
    stage.appendChild(bar)
  }
}

start()

async function swapBars(barsDivs, i, j) {
  barsDivs[i].style.left = `${5 + j * 30}px`
  barsDivs[i].classList.add('activate')
  barsDivs[j].style.left = `${5 + i * 30}px`
  barsDivs[j].classList.add('activate')
  await sleep(300)
  bars.Divs[i].classList.remove('activate')
  barsDivs[j].classList.remove('activate')

  // Swap bars in the array
  let temp = barsDivs[i]
  barsDivs[i] = barsDivs[j]
  barsDivs[j] = temp
}

const algorithms = [
  sortingAlgorithms.bubbleSort,
  sortingAlgorithms.selectionSort,
  sortingAlgorithms.quickSort
]

const solve = async () => {
  const algorithm = structuredClone(bars.map(el => el.height));

  const swaps = await algorithms[selectAlgorithm.selectedIndex](algorithm);

  for (let i = 0; i < swaps.length; i++) {
    if(swaps[i].firstPosition === swaps[i].lastPosition) {
      barsDivs[swaps[i].firstPosition].classList.add('activate')
      await swapBars(barsDivs, swaps[i].firstPosition, swaps[i].lastPosition)
    }
  }
}

generateBtn.addEventListener('click', () => {
  nBars = parseInt(numberBars.value, 10);
  stage.style.width = `${nBars * 30}px`;
  start()
})

solveBtn.addEventListener('click', () => {
  solve()
})