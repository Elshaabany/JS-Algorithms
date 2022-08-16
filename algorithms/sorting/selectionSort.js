const swap = require("./swap");

const selectionSort = (array) => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        swap(arr, i, minIndex)
    }
    return arr;
}