# linked-list
This assignment is from the Odin Project's full stack javaScript curriculum. See here[https://www.theodinproject.com/lessons/javascript-linked-lists#assignment] for the assignment specs. 

# objective
The objective of this assignment is to 

1. understand what linked list data structure is 
2. build a linked list according to the instructions 
# technologies
vanilla JS 
# features 
The script has 

1. `LinkedList` class that represents a full list. 
2. `Node` factory with `data` property and a link to the `nextNode` 

linkedList object has following methods: 

1. `append(data)` : adds new node with `data` to the end of the list 
2. `prepend(data)` : adds new node with `data` to the start of the list
3. `getSize` : returns total number of nodes in the list 
4. `getHead` : returns the head node 
5. `getTail` : returns the tail node 
6. `getNodeAt(indexToFind)` : returns a node at the given `indexToFind`
7. `pop` : removes the node of the list 
8. `contains(data)` : returns true if the passed `data` is in the list, otherwise returns false 
9. `findNodeIndex(data)` : returns the index of the node with `data`, or null if not found 
10. `toString` : console logs each node's data

Extra Credit 

11. `insertAt(data,index)` : inserts a new node with the provided `data` at the given `index`
12. `removeAt(index)` : removes the node at the given `index`