"use strict";
const TrieNode = require('./trie.node');

module.exports = class Trie{
    constructor(){
        this.root = new TrieNode('');
    }

    insert(key){

        if (key == null){
            return;
        }

        let currentNode = this.root;

        for( let char of [...key]){
            if(!currentNode.children.has(char)){
                currentNode.children.set(char, new TrieNode())
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.markAsLeaf();
    }

    search(key){

        if (key == null){
            return false;
        }

        let currentNode = this.root;

        for( let char of [...key]){
            currentNode = currentNode.children.get(char);
            if(currentNode == null){
                return false;
            }
        }
        return  currentNode.isEndWord;
    }
}

