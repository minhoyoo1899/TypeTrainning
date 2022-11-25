const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];
let step = 0;
/*
 문제1-1. arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 문제1-2. arrobj = {
   "one" : 0
   "two" : 1
   "three" : 2
   "four" : 3
   "five" : 4
 }

조건 1: sort(), sorted() 메서드를 사용하지 않고 문제를 해결합니다.
조건 2: 주어진 무작위 배열이 아닌, 다른 무작위 형태의 배열이어도 동작하여야 합니다.
조건 3: sortArray() 함수는 인자로 '배열'을 받습니다.
조건 4: sortArray() 함수의 리턴 타입은 객체입니다.
조건 5: 출력 객체는 정렬이 완료된 데이터의 index 0번째가 된 순서는 "one" 키의 값으로, index 1번째는 "two" 키의 값으로 배치되어 4번째 인덱스까지 객체에 담겨 출력되어야 합니다.
조건 6: step값이 몇인지(실행이 몇번 진행되었는지), 콘솔에 기록되어야 합니다.
*/
function sortarry(arr) {
  if (Array.isArray(arr) === true) {
    const newArr = [];
    step = step + 1;
    for (let i = 0; i < arr.length; i++) {
      //console.log(arr[i]);
      newArr[i] = i + 1;
      step = step + 1;
    }
    //console.log(newArr);
    const obj = { ...newArr };
    step = step + 1;
    //console.log(obj);

    //Object.defineProperty(obj, '1', { configurable: false });
    //delete Object.assign(obj, {'one': obj['0']})['0'];
    //obj['0'] = obj['one'];
    //delete obj['0'];

    for (let key in obj) {
      //console.log(key);
      //console.log(obj[key]);
      Object.defineProperty(obj, key, { configurable: false });
      step = step + 1;
      switch (key) {
        case "0":
          delete Object.assign(obj, { one: obj[key] })[key];
          break;
        case "1":
          delete Object.assign(obj, { two: obj[key] })[key];
          break;
        case "2":
          delete Object.assign(obj, { three: obj[key] })[key];
          break;
        case "3":
          delete Object.assign(obj, { four: obj[key] })[key];
          break;
        case "4":
          delete Object.assign(obj, { five: obj[key] })[key];
          break;
        case "5":
          delete Object.assign(obj, { six: obj[key] })[key];
          break;
        case "6":
          delete Object.assign(obj, { seven: obj[key] })[key];
          break;
        case "7":
          delete Object.assign(obj, { eight: obj[key] })[key];
          break;
        case "8":
          delete Object.assign(obj, { nine: obj[key] })[key];
          break;
        case "9":
          delete Object.assign(obj, { ten: obj[key] })[key];
          break;
      }
      step = step + 1;
    }
    console.log(obj);
    step = step + 1;
    console.log(`step : ${step}`);
  }
}

sortarry(inputData);
