class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  let current1 = head1;
  let num1 = []
  let current2 = head2;
  let num2 = []
  let res = new Node(null);
  let tail = res;
  
  // traverse list 1 append each val into beginning of array
  // convert array to Number
  // repeate for list 2
  // add list 1 and list 2 numbers together into a new array
  // traverse new array creating nodes for each val
  // return the head of resulting linked list
  
  while(current1 != null || current2 != null) {
    if(current1 != null) {
      num1.unshift(current1.val)
      current1 = current1.next;
    }
    if(current2 != null) {
      num2.unshift(current2.val)
      current2 = current2.next;
    }
  }

  num1 = Number(num1.join(''));
  num2 = Number(num2.join(''));
  let sum = (num1 + num2).toString();
  console.log(sum)
  for(let i = sum.length - 1; i >= 0; i--) {
    let newNode = new Node(sum[i]);
    tail.next = newNode;
    tail = tail.next;
  }

  return res.next;
};

module.exports = {
  addLists,
};

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// // 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// // 4 -> 5 -> 3

// console.log(addLists(a1, b1));
// // 5 -> 7 -> 9

const a1 = new Node(1);
const a2 = new Node(4);
const a3 = new Node(5);
const a4 = new Node(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;
// 1 -> 4 -> 5 -> 7

const b1 = new Node(2);
const b2 = new Node(3);
b1.next = b2;
// 2 -> 3 

console.log(addLists(a1, b1));