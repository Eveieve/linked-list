# linked-list
This assignment is from the Odin Project's full stack javaScript curriculum. See [here](https://www.theodinproject.com/lessons/javascript-linked-lists#assignment)for the assignment specs. 

---
## technologies 
Vanilla javasScript

# objective
The objective of this assignment is to 

* understand what linked list data structure is 
*  build a linked list according to the instructions 

# features 
The script has: 
The script has: 

* `LinkedList` class that represents a full list. 
*  `Node` factory with `data` property and a link to the `nextNode` 

linkedList object has following methods: 

* `append(data)` - adds new node with `data` to the end of the list 
* `prepend(data)` - adds new node with `data` to the start of the list
* `getSize` - returns total number of nodes in the list 
* `getHead` - returns the head node 
* `getTail` - returns the tail node 
* `getNodeAt(indexToFind)` - returns a node at the given `indexToFind`
* `pop` - removes the node of the list 
* `contains(data)` - returns true if the passed `data` is in the list, otherwise returns false 
* `findNodeIndex(data)` - returns the index of the node with `data`, or null if not found 
* `toString` - console logs each node's data
* `append(data)` - adds new node with `data` to the end of the list 
* `prepend(data)` - adds new node with `data` to the start of the list
* `getSize` - returns total number of nodes in the list 
* `getHead` - returns the head node 
* `getTail` - returns the tail node 
* `getNodeAt(indexToFind)` - returns a node at the given `indexToFind`
* `pop` - removes the node of the list 
* `contains(data)` - returns true if the passed `data` is in the list, otherwise returns false 
* `findNodeIndex(data)` - returns the index of the node with `data`, or null if not found 
* `toString` - console logs each node's data

Extra Credit 

* `insertAt(data,index)` - inserts a new node with the provided `data` at the given `index`
* `removeAt(index)` - removes the node at the given `index`