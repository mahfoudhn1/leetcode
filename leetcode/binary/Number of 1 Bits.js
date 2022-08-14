var hammingWeight = (n)=>{
    let count = 0;
    while (n !== 0) {
      n = n & (n - 1);
      count++;
    }
  
    return count;

};


var n = 00000000000000000000000000001011
console.log(hammingWeight(n));
// hammingWeight(n)