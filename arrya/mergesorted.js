const mergeSorted = (arr, m, n, arr2) => {
    let i = m - 1;        
    let j = n - 1;     
    let k = m + n - 1;    

    while (j >= 0) {
        if (i >= 0 && arr[i] > arr2[j]) {
            arr[k--] = arr[i--];
        } else {
            arr[k--] = arr2[j--];
        }
    }
};

const arr = [1, 2, 3, 0, 0, 0];
const m = 3;
const n = 3;
const arr2 = [2, 5, 6];

mergeSorted(arr, m, n, arr2);
console.log(arr);  
