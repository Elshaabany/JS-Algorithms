const swap = require('./swap');

const insertionSort = (array) => {
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j + 1] < arr[j])
                swap(arr, j + 1, j);
            else
                break;
        }
    }
    return arr;
}