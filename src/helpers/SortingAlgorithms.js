const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

const defaultCompare = (a, b) => {
    if(a === b) {
        return 0
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

let swaps = []

const partititon = (array, left, right, compareFn) => {
    const pivot = array[Math.floor((right + left) / 2)]

    let i = left
    let j = right

    while(i <= j) {
        while(compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++
        }
        while(compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--
        }

        if(i <= j) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
            swaps.push({firstPosition: i, lastPosition: j})
            i++
            j--
        }
    }
}

const quick = (array, compareFn = defaultCompare) => {
    let index

    if(array.length > 1) {
        index = partititon(array, left, right, compareFn)
        if(left < index - 1) {
            quick(array, left, index - 1, compareFn)
        }
        if(index < right) {
            quick(array, index, right, compareFn)
        }
    }
    return array
}
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

    quickSort(array,compareFn = defaultCompare) {
        swaps = []
        quick(array)
        return swaps
    }
}
export {
    SortingAlgorithms
}