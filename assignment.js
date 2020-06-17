const BinarySearchTree = require('./BST')

// 1a)

/*
[full list]
[3, 5, 6, 8]
[6, 8]
[8]
*/

// 1b)

/*
[full list]
[12, 14, 15, 17, 18]
[17, 18]
return -1
*/

// 2) in seachbox

// 3) 

// 

/*I'd find the 'middle' of the library, assuming that it's properly 
organized (good luck).  Then I'd see if my book dewey is greater
or larger than the ones I found, and then find the next middle.
I think at some point, being human, id probably then start searching
one by one once I was very close to the range. All in all, I'd 
use a binary search algo.*/

// 4a)

// 14, 19, 15, 27, 25, 79, 91, 90, 89, 35 ?

// 4b) 

// 8, 6, 5, 7, 10, 9, 11

// 5) implemented in BST.js

const BST = new BinarySearchTree();

const dataset = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

dataset.forEach(data => BST.insert(data, data));

console.log(BST.preOrder());
console.log(BST.inOrder());
console.log(BST.postOrder());

// 6)

