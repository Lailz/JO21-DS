const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode; // our link
  }
}

class LinkedList {
  constructor(data, nextNode) {
    this.headNode = new Node(data, nextNode);
  }

  addBeginning = (newData) => {
    const newNode = new Node(newData);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  };

  removeNode = (data) => {
    let currentNode = this.headNode;
    if (currentNode.data === data) {
      this.headNode = currentNode.nextNode; // if we want to remove the head
    } else {
      while (currentNode) {
        // if we want to remove anything else
        let next = currentNode.nextNode;
        if (next.data === data) {
          currentNode.nextNode = next.nextNode;
          currentNode = null;
        } else {
          currentNode = next; // if the data is not the one we want to delete, we jump into the next node
        }
      }
    }
  };

  get dataAsString() {
    let dataString = "";
    let currentNode = this.headNode;
    while (currentNode) {
      //   console.log(currentNode.data);
      dataString = dataString + `${currentNode.data} \n`;
      currentNode = currentNode.nextNode;
    }
    // console.log("heeelo", dataString);
    return dataString;
  }
}

const nodeOne = new Node("yousef");
const nodeTwo = new Node("Eyad", nodeOne);
const myList = new LinkedList("abdallah", nodeTwo);

myList.addBeginning("Esraa");
myList.addBeginning("Wafaa");

console.log(myList.dataAsString);

myList.removeNode("Esraa");
console.log(myList.dataAsString);

myList.removeNode("Wafaa");
console.log(myList.dataAsString);

const nameToRemove = prompt("Who so you want to delete?");
myList.removeNode(nameToRemove);

console.log(myList.dataAsString);
