const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];
let step = 0;

// function sortarry(array) {
//   const newArr = []
//   const mapArr = array.map(index => index)
//   //console.log(mapArr);
//   for (let i = 0; i < mapArr.length; i++){
//     if (newArr.length < 3) {
//       if (newArr[0] === undefined) {
//         const min = Math.min.apply(null, mapArr);
//         newArr[0] = min;
//         const index = mapArr.indexOf(min, 0);
//         //console.log(index);
//         delete mapArr[index];
//         console.log(mapArr);
//       }
//     }
//     //newArr.push(mapArr[i]);
//   }
//   console.log(newArr)
// }

function sortarry(array) {
  let noSwaps;
  const mapArr = array.map(index => index)  
  for (let i = mapArr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (mapArr[j] > mapArr[j+1]) {
            let temp = mapArr[j];
            mapArr[j] = mapArr[j+1];
            mapArr[j+1] = temp;
            noSwaps = false;
         }
      }
    if (noSwaps) break;
  }  
  //const mapArrObj = { ...mapArr }
  const mapArrObj = { }
  const count = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  count.forEach((count, index) => {
    //console.log(count);
    //console.log(index);
    mapArrObj[count] = mapArr[index]
  });  
  return mapArrObj;  
}

console.log(sortarry(inputData));

//selectionSort
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
   }
  
  if (arr[min] !== arr[i]) {
     swap(arr, i, min);
  }  
  return arr;
}

//insertSort
function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let targetIdx = 1;    
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        targetIdx = j;
        arr[targetIdx + 1] = arr[targetIdx]; 
    }
    if (targetIdx) {
      arr[targetIdx] = currentVal;
    }
  }
  return arr;
