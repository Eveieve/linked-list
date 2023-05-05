class LinkedListClass {
  // list is empty , it's pointing to null
  constructor(head = null) {
    this.head = head;
  }
  append(data) {
    // append as the last node
    this.head = Node(data); // nextNode is null by default = it's the last node.
  }
}
const linkedlistClass = new LinkedListClass();
linkedlistClass.append("some data");
console.log("list", linkedlistClass);

// Node factory
// nextNode is null by default unless specified.
function Node(data, nextNode = null) {
  // not pointing at anything unless specified.
  // is an object containing key 'data', and key 'nextNode'
  return { data, nextNode };
}
// node1 object
