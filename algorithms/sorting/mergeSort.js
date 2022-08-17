const mergeSort = (array) => {
    let arr = [...array];

    if (arr.length < 2) {
        return arr;
    }

    const half = arr.length / 2;
    const left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
}

const merge = (left, right) => {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right];
}
