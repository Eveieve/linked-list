#!/usr/bin/env node

// const { check } = require("prettier");

// Node factory
// nextNode is null by default unless specified.
function Node(data, nextNode = null) {
  // not pointing at anything unless specified.
  // is an object containing key 'data', and key 'nextNode'
  return { data, nextNode };
}

class LinkedList {
  // list is empty , it's pointing to null
  constructor(data = null) {
    this.head = data;
    this.size = 0;
  }

  append(data) {
    // current is the current pointer!!
    let current = this.head; // point to head first

    // have the pointer point to 'nextNode' while it's not pointing to null
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    // append new node next to the current node
    current.nextNode = Node(data);
    this.size++;
  }
  prepend(data) {
    // prepend as the list's head
    // where did the third param came from??
    this.head = Node(data, this.head); // this new node is pointing to the head (it's head now)
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

  getNodeAt(indexToFind) {
    // i is the index to find
    let current = this.head;
    let i = 0;
    while (current.nextNode !== null) {
      if (i === indexToFind) return current;
      i++;
      current = current.nextNode;
    }
    return current;
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
      }
      return false;
    }
  }

  // returns index of the node containing this data
  findNodeIndex(data) {
    // if ll contains(data)..
    // loop through to look for data and return current.index
    if (this.contains(data)) {
      let current = this.head;

      while (current.nextNode !== null) {
        if (current.data === data) return current.index;
        current = current.nextNode; // keep looping through
      }
    } else return null; // data doesn't exist in linked list
  }

  toString() {
    let current = this.head;
    console.log(current.data.toString());
    while (current.nextNode !== null) {
      current = current.nextNode;
      console.log(current.data.toString()); // print out data as strings
    }
  }
  insertAt(data, index) {
    let current = this.head;
    let i = 0;
    if (i === index) this.head = Node(data, current.nextNode);
    while (current.nextNode !== null) {
      i++;
      // i is the index of the current.nextNode already
      if (i === index) current.nextNode = Node(data, current.nextNode);
      current = current.nextNode;
    }
  }
}
const linkedList = new LinkedList();

linkedList.prepend(100);
linkedList.append(200);
linkedList.append(300);
linkedList.append(400);

// linkedList.insertAt(900, 6); // index not found, longer than list
console.log(linkedList);
// console.log(linkedList.getNodeAt(2));
console.log(linkedList.getNodeAt(3));
console.log(linkedList.getNodeAt(2));
console.log(linkedList.getNodeAt(7));
linkedList.insertAt(900, 3); // need for null nodes in between?
console.log(linkedList);
