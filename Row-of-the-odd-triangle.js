/*
Given a triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
find the triangle's row knowing its index (the rows are 1-indexed), e.g.:
  odd_row(1)  ==  [1]
  odd_row(2)  ==  [3, 5]
  odd_row(3)  ==  [7, 9, 11]

Note: your code should be optimized to handle big inputs.
*/


// Solution

function oddRow(n) {
  return Array(n).fill(0).map((_,i) => n*n-n+1+i*2);
}

// or 

/* EXPLANATION:
1. Summ of all odd numbers in n-row is equal to: n*n*n,
2. It can be described also as: x+(x+2)+(x+3)+(x+4), where "x" is first odd number in the row
3. By using arithetic sequence formula [Sn = ( (2*a1 + (N-1) * r) / 2) * N],
    it can be described as: n*x + n*n - n
4. By comparing two patters, we receive: n*n*n = n*x + n*n - n
5. By extracting "x", we can calculate first number in the odd row: x = n*n - n + 1     
*/
const oddRow=(n)=>  new Array(n).fill(n*n - n + 1).map((el,i)=> i? el + i*2: el)