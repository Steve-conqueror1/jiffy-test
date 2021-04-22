"use strict";
module.exports = class TrieNode{
    constructor(){
        this.children = new Map(); // memory-efficient version using Map ( HaspMap) to store a node's children
        this.isEndWord = false; //will be true if the node represents the end of word
    }
    markAsLeaf(){
        this.isEndWord = true;
    }
}
