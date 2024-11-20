class SortingAlgorithms {
    constructor({swapBars}) {
        this.swapBars = swapBars;
    }
    bubbleSort(array) {
        const swaps = []
        for(let i = 0; i < array.length; i++) {

            //Last i elelments are already sorted
            for(let j = 0; j < array.length - i - 1; j++) {
                
                //If the element found is greater than the next element, swap them
                if(array[j] > array[j + 1]) {
                    //Swap the elements if condition = true
                    let temp = array[j];
                    aray[j] = array[j + 1];
                    array[j + 1] = temp;
                    swaps.push({firstPosition: j,  lastPostion: j + 1})
                }
            }
        }

        return swaps;
    }

    selectionSort(array) {
        const swaps = []
        for(let i = 0; i < array.length - 1; i++) {
            min = i
            for(let j = i + 1; j < array.length; j++) {
                if(array[j] < array[min]) {
                    min = j
                }
            }
            let temp = array[min]
            array[min] = array[i]
            array[i] = temp
            swaps.push({firstPosition: i, lastPosition: min})
        }

        return swaps
    }
}
export {
    SortingAlgorithms
}