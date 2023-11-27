class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  let current = head;
  let prev = null;

  while(current != null){
    if(current.val === targetVal && prev === null) {
      head = head.next;
      break;
    };
    if(current.val === targetVal && prev != null) {
      prev.next = current.next;
      break;
    };
    prev = current;
    current = current.next;
  }

  return head
};

module.exports = {
  removeNode,
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(removeNode(a, "c"));
// a -> b -> d -> e -> f


const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

x.next = y;
y.next = z;

// x -> y -> z

console.log(removeNode(x, "z"));
// x -> y

const q = new Node("q");
const r = new Node("r");
const s = new Node("s");

q.next = r;
r.next = s;

// q -> r -> s

console.log(removeNode(q, "q"));
// r -> s
