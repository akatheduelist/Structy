class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  let current = head;
  let prev = null;
  let newNode = new Node(value);
  let currentIndex = 0;

  if(currentIndex === index) {
    newNode.next = current;
    return newNode;
  }

  while(current != null) {
    if(currentIndex === index) {
      prev.next = newNode;
      newNode.next = current;
      break;
    };
    if(current.next === null && currentIndex + 1 === index) {
      current.next = newNode;
      console.log("HI", newNode)
      break;
    };
    currentIndex++;
    prev = current;
    current = current.next;
  }

  return head
};

module.exports = {
  insertNode,
};

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// console.log(insertNode(a, 'x', 2));

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// console.log(insertNode(a, 'v', 3));

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// console.log(insertNode(a, 'm', 4));

const a = new Node("a");
const b = new Node("b");

a.next = b;

// a -> b

insertNode(a, 'z', 0);
// z -> a -> b 
