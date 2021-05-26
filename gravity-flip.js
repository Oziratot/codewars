//Given the initial configuration of the cubes in the box, 
//find out how many cubes are in each of the n columns after Bob switches the gravity.

const flip=(d, a)=>{
    if (d==='R') {
        return a.sort( (a, b) => a - b)
    } else {
        return a.sort( (a, b) => b - a);
    } 
  }

console.log(flip('L', [1, 4, 5, 3, 5]));