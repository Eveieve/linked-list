#!/usr/bin/env node

class LinkedListClass {
  // list is empty , it's pointing to null
  // initial linkelist
  constructor(data = null) {
    this.head = data;
    this.size = 0;
  }

  append(nodeName, data) {
    let current = this.head; // point to head first
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = Node(nodeName, data);
    console.log(current);

    this.size++;
  }
  prepend(nodeName, data) {
    // prepend as the list's head
    this.head = Node(nodeName, data, this.head); // this new node is pointing to the head (it's head now)
    this.size++;
  }
  getSize() {
    return this.size;
  }
  getHead() {
    return this.head;
  }
}
const linkedList = new LinkedListClass();

linkedList.prepend(" node", 1);
linkedList.prepend("node", 0);
linkedList.prepend("head node", "head");
linkedList.append("last node", 3);
// linkedList.append("real last node", 4);
console.log(linkedList);
// console.log("list", linkedList);
// console.log("getSize", linkedList.getSize());
// console.log("getSize", linkedList.getHead());

// Node factory
// nextNode is null by default unless specified.
function Node(name, data, nextNode = null) {
  // not pointing at anything unless specified.
  // is an object containing key 'data', and key 'nextNode'
  return { name, data, nextNode };
}
// node1 object
