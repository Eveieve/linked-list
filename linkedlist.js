class LinkedListClass {
  // list is empty , it's pointing to null
  constructor(head = null) {
    this.head = head;
  }
  append(data) {
    // append as the last node
    // list's head is now this new node containing data
    this.head = Node(data); // nextNode is null by default = it's the last node.
  }
  prepend(data) {
    // prepend as the head
    this.head = Node(data, this.head); // this new node is pointing to the head (it's head now)
  }
}
const linkedlistClass = new LinkedListClass();
linkedlistClass.append("some data");
linkedlistClass.prepend("head now!");
console.log("list", linkedlistClass);

// Node factory
// nextNode is null by default unless specified.
function Node(data, nextNode = null) {
  // not pointing at anything unless specified.
  // is an object containing key 'data', and key 'nextNode'
  return { data, nextNode };
}
// node1 object
