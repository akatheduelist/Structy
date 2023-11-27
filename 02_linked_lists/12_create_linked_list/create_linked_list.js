class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  const newList = new Node(null);
  let tail = newList

  for(let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i])
    tail.next = newNode
    tail = tail.next
  }

  return newList.next
};

module.exports = {
  createLinkedList,
};

console.log(createLinkedList(["h", "e", "y"]));
// h -> e -> y
console.log(createLinkedList([1, 7, 1, 8]));
// 1 -> 7 -> 1 -> 8
console.log(createLinkedList(["a"]));
// a
console.log(createLinkedList([]));
// null