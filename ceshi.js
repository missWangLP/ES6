function setArr(arr1, arr2){
  let num = 0;
  function setB(arr, value){
    for(let i = 0; i<arr.length; i++){
      if(arr[i] === value) {
        num++;
        arr.splice(0, i+1);
        break;
      }
    }
  }
  for(let i = 0; i<arr1.length; i++){
    if(arr2.length === 0) break;
    setB(arr2, arr1[i]);
  }
  return num;
}
console.log(setArr([1,3,5], [1,5,3]))
console.log(setArr([1,1,2,1], [3,3,1]))
console.log(setArr([3,3,2,3,3], [1,3,1,2]))
console.log(setArr([1,4], [3,5]))
