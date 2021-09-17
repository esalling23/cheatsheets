# Binary Trees

----

## What is a binary tree?

upside-down tree structure of branching nodes, lots of inheritance
ex: the DOM
no more than 2 children off each node
if child is greater or less than parent, that determines if it's a left or right branch
left is less than, right is greater (remember left, less)
all values must be unique and comparable

### Big O:

- log(n) in average case because when searching you're immediately able to
- linear in worst case because you can have an "unbalanced" binary tree where
everything is going in the wrong direction

### depth-first vs breadth-first search
deep vs wide search in terms of the nodes
depth-first: start at first node, go down as far as you can to the end of one chain
             then go back up and do the next chain to the right
breadth-first: start at first node, move down then through one left right-left, then down again

![breadth vs depth search](https://lh3.googleusercontent.com/proxy/LTLUesSN685eb09IWSO96eC5hx03ajwKExoq2fdyDTRx47wE9Q4Ie1-oMV46RR-5-ixohmrdEDSKD1NdrWDcALB4EPlDGehQeSCVhoJT)

----

## Algorithms

### Searching

Searching for a specific value in a BinaryTree can be accomplished using the following algorithm:

- Create a variable, currentNode, and assign it to the first node (the root) in the BinaryTree
- While currentNode is not undefined, repeat steps 3-5.
- If the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.
- Otherwise, if the value we are searching for is greater than the currentNode's value, then set the currentNode to its right node.
- Otherwise the value we are searching for is equal to the currentNode's value. So we found it.
- If currentNode becomes undefined, then the value does not exist in the tree.

### Inserting

[Walkthrough on inserting in a BinaryTree](https://levelup.gitconnected.com/inserting-a-node-into-a-binary-tree-visually-explained-efbfaea34546)

We do not insert into the middle of a binary tree - that would make it a linked list! Instead, go all the way down and find the best place at the bottom to add the value. 

----

## Bonus Visuals, Big O

![Binary Tree](https://i.imgur.com/UaBDRIc.png)

> [Binary Tree Whiteboard](https://miro.com/app/board/o9J_lcAjrDk=/)

### Binary Tree Worst Cases

<details>
<summary>Example 1</summary>

![Example 1](https://i.imgur.com/8FgKLsg.png)


</details>

<details>
<summary>Example 2</summary>

![Example 2](https://i.imgur.com/U7TxoTF.png)


</details>

<details>
<summary>Example 3</summary>

![Example 3](https://i.imgur.com/8WKSldI.png)


</details>

<details>
<summary>Example 4</summary>

![Example 4](https://i.imgur.com/jaLWyXS.png)


</details>

> [Worst Case Diagrams](https://miro.com/app/board/o9J_lcApbb0=/)

### Binary Tree Includes

#### Example 1: Searching for 63

<details>
<summary>Step 0.  Start with a binary tree, we will search for the value 63.</summary>

![Step 0](https://i.imgur.com/eNU3znY.png)


</details>

<details>
<summary>Step 1.  Create a variable, currentNode, and assign it to the first node (the root) in the BinaryTree.</summary>

![Step 1](https://i.imgur.com/JNjclEc.png)


</details>

<details>
<summary>Step 2. While currentNode is not undefined if the value we are searching for is greater than the currentNode's value, then set the currentNode to its right node.</summary>

![Step 2](https://i.imgur.com/Nz18ZNL.png)


</details>

<details>
<summary>Step 3.  While currentNode is not undefined if the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.</summary>

![Step 3](https://i.imgur.com/e8waMpD.png)


</details>

<details>
<summary>Step 4.  The value we are searching for is equal to the currentNode's value. So we found it.</summary>

![Step 4](https://i.imgur.com/b0CwKrO.png)


</details>


#### Example 2: Searching for 12

<details>
<summary>Step 0.  Start with a binary tree, we will search for the value 12.</summary>

![Step 0](https://i.imgur.com/gjCmrDr.png)


</details>

<details>
<summary>Step 1.  Create a variable, currentNode, and assign it to the first node (the root) in the BinaryTree.</summary>

![Step 1](https://i.imgur.com/PfF0LyI.png)


</details>

<details>
<summary>Step 2. While currentNode is not undefined if the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.</summary>

![Step 2](https://i.imgur.com/krPmA4D.png)


</details>

<details>
<summary>Step 3.  While currentNode is not undefined if the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.</summary>

![Step 3](https://i.imgur.com/ou7yswi.png)


</details>

<details>
<summary>Step 4.  The value we are searching for is equal to the currentNode's value. So we found it.</summary>

![Step 4](https://i.imgur.com/DH9AgQj.png)


</details>

### Example 3: Searching for a value that doesn't exist

<details>
<summary>Step 0.  Start with a binary tree, we will search for the value 56.</summary>

![Step 0](https://i.imgur.com/5mplE2a.png)


</details>

<details>
<summary>Step 1.  Create a variable, currentNode, and assign it to the first node (the root) in the BinaryTree.</summary>

![Step 1](https://i.imgur.com/5E5nOeB.png)


</details>

<details>
<summary>Step 2. While currentNode is not undefined if the value we are searching for is greater than the currentNode's value, then set the currentNode to its right node.</summary>

![Step 2](https://i.imgur.com/ARJJ0kI.png)


</details>

<details>
<summary>Step 3.  While currentNode is not undefined if the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.</summary>

![Step 3](https://i.imgur.com/GGaZRbK.png)


</details>

<details>
<summary>Step 4.  If the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.</summary>

![Step 4](https://i.imgur.com/hO1x4QS.png)


</details>

<details>
<summary>Step 5.  The currentNode becomes undefined, so the value does not exist in the tree.</summary>

![Step 5](https://i.imgur.com/nLXhHgf.png)


</details>

> [Binary Tree Includes Whiteboard](https://miro.com/app/board/o9J_lcApkj8=/)

### Binary Tree Insert

#### Insert Into Empty Tree

<details>
<summary>Step 0: Start with an empty Binary Tree, we will insert the value 50</summary>

![Step 0](https://i.imgur.com/qd2kG2i.png)


</details>

<details>
<summary>Step 1: Set the root node property to a new node containing 50</summary>

![Step 1](https://i.imgur.com/NeO9JIs.png)


</details>

#### Insert 75 Into Tree

<details>
<summary>Step 0. Start with a binary tree, we will insert the new value 75.</summary>

![Step 0](https://i.imgur.com/NVyfdJw.png)


</details>

<details>
<summary>Step 1.  Create a variable, currentNode, and assign it to the first node (the root) in the BinaryTree.</summary>

![Step 1](https://i.imgur.com/2zUdPMK.png)


</details>

<details>
<summary>Step 2. Set the currentNode's right node to a  new node with the value.</summary>

![Step 2](https://i.imgur.com/JFYYIrM.png)


</details>

#### Insert 60 Into Tree

<details>
<summary>Step 0. Start with a binary tree, we will insert the new value 60.</summary>

![Step 0](https://i.imgur.com/UDV3Wez.png)


</details>

<details>
<summary>Step 1.  Create a variable, currentNode, and assign it to the first node (the root) in the BinaryTree.</summary>

![Step 1](https://i.imgur.com/rcRQFtG.png)


</details>

<details>
<summary>Step 2. Since  the number to insert 60 is greater than the currentNode's value 50, set currentNode its right node.</summary>

![Step 2](https://i.imgur.com/sqLecpA.png)


</details>

<details>
<summary>Step 3. Set the currentNode's left node to a new node with the value</summary>

![Step 3](https://i.imgur.com/rxIB00g.png)


</details>

#### Insert 80 Into Tree

<details>
<summary>Step 0. Start with a binary tree, we will insert the new value 80.</summary>

![Step 0](https://i.imgur.com/36V7AZy.png)


</details>

<details>
<summary>Step 1.  Create a variable, currentNode, and assign it to the first node (the root) in the BinaryTree.</summary>

![Step 1](https://i.imgur.com/3ApcYi0.png)


</details>

<details>
<summary>Step 2. Since  the number to insert 80 is greater than the currentNode's value 50, set currentNode its right node.</summary>

![Step 2](https://i.imgur.com/3cB1baQ.png)


</details>

<details>
<summary>Step 3. Set the currentNode's right node to a  new node with the value.</summary>

![Step 3](https://i.imgur.com/SO281yg.png)


</details>

> [Binary Tree Insert Whiteboard](https://miro.com/app/board/o9J_lcHUGNU=/)
