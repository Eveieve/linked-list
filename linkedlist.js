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

  // last node doesn't have an 'index' property..
  getNodeAt(indexToFind) {
    // i is the index to find
    let current = this.head;
    current.index = 0;

    if (current.index === indexToFind) return current;
    let i = 0;
    while (current.nextNode !== null) {
      current.index = i++; // set index, increment by one, for each iteration
      if (current.index === indexToFind) return current;
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
        else return false;
      }
    }
  }

  findNodeIndex(data) {
    if (this.contains(data)) {
      const foundNodeIndex = this.getNodeAt(data).index;
      return foundNodeIndex;
    } else null;
  }

  toString() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
      console.log(current.data.toString()); // print out data as strings
    }
  }
}
const linkedList = new LinkedList();

linkedList.prepend(100);
linkedList.append(200);
linkedList.append(300);
linkedList.append(400);
console.log(linkedList);
console.log(linkedList.getNodeAt(3)); // find node, third place
