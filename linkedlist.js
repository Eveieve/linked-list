#!/usr/bin/env node

class LinkedListClass {
  // list is empty , it's pointing to null
  // initial linkedlist
  constructor(data = null) {
    this.head = data;
    this.size = 0;
  }

  append(nodeName, data) {
    // current is the current pointer!!
    let current = this.head; // point to head first
    // if the pointer is pointing to null

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = Node(nodeName, data);
    // console.log(current);

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
  getTail() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(indexToFind) {
    // i is index to find
    let current = this.head;
    current.index = 0;
    let i = 1;
    if (current.index == indexToFind) return current;
    while (current.nextNode !== null) {
      current = current.nextNode;
      current.index = i++; // set index, increment by one, for each iteration
      if (current.index == indexToFind) return current;
    }
  }

  pop() {
    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode; // loop until two nodes before null
    }
    current.nextNode = null; // have current's next point to null
    this.size--;
  }
  contains(data) {
    let current = this.head; // in case data is in the head node
    if (current.data == data) return true;
    else {
      while (current.nextNode !== null) {
        current = current.nextNode;
        if (current.data == data) return true;
        else return false;
      }
    }
  }
  toString() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
      console.log(current.data.toString()); // print out data as strings
    }
  }
}
const linkedList = new LinkedListClass();

linkedList.prepend(0);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList);
console.log(linkedList.getTail());
// console.log("list", linkedList);
// console.log("getSize", linkedList.getSize());
// console.log("getSize", linkedList.getHead());
// console.log(linkedList.pop());
console.log(linkedList);
console.log(linkedList.toString());
console.log(linkedList.at(1));
// console.log(linkedList);
// console.log(linkedList.contains(10));
// Node factory
// nextNode is null by default unless specified.
function Node(data, nextNode = null) {
  // not pointing at anything unless specified.
  // is an object containing key 'data', and key 'nextNode'
  return { data, nextNode };
}
// node1 object
