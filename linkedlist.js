function LinkedList() {
  // 1. function prepend(value) adds a new node containing value to the start
  // of the list.

  let head = {};
  const getHead = () => head;
  let nextNode = {};

  const prepend = (value) => {
    // set the head to this new node
    head = Node(value);
    // set the head to this new node.
    // return { head };
  };

  return {
    getHead,
    nextNode,
    prepend,
  };
}

const linkedlist = LinkedList();
linkedlist.prepend("hello");
console.log(linkedlist.getHead());
// console.log(linkedlist.head); // is not changed.

// Node factory
function Node(value = null, nextNode = null) {
  value = value;
  nextNode = nextNode;
  return { value, nextNode };
}
// node1 object
const node1 = Node();

console.log(node1);
