import { sleep } from './helpers/util.js';
import { SortingAlgorithms } from './helpers/sortingAlgorithms.js';

let nBars = 10

let numberBars = document.getElementById('numberBars');

const statge = documents.getElementById('stage');

stage.style.width = `${nBars * 30}px`;

const selectAlgorithm = document.getElementById('selectAlgorithm');

const generateBtn = document.getElementById('generateBtn');
const solveBtn = document.getElementById('solveBtn');

let bars = []
let barsDiv = []

const sortingAlgorithms = new SortingAlgorithms({ })

const start = () => {
  stage. innerHTML = '';

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
    barsDiv.push(bar);
    stage.appendChild(bar)
  }
}

