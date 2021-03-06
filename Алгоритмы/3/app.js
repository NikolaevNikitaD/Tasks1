let arr = [2, 5, 8, 1, 4];

function insertSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > curr) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = curr;
    }
    return arr;
}
console.log(insertSort(arr));