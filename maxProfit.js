function maxProfit (arr) {
  var emty = {}
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(emty[arr[i]] === undefined) {
        emty[arr[i]] = [];
      }
       emty[arr[i]].push(Number(arr[j] - arr[i]));
    }
  }

  var arryC = Object.values(emty);
  arryD = [];
  for(var z = 0; z < arryC.length; z ++) {
    arryD.push(arryC[z].reduce(function(a, b) {return Math.max(a, b)}));
  }
  var max = arryD.reduce(function(a, b) {return Math.max(a, b)});

  if(max < 0) {
    return -1;
  }
 return max;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([45, 24, 23, 22, 10, 8, 1]));