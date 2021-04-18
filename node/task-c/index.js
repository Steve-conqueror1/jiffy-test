"use strict";
const Trie = require('./trie');

function PossibleConcats(dict, word){

    const concatOfTwoWords = [];
    // Insert all the words from dict in the trie
    let trie = new Trie()
    for (let i=0; i<dict.length; i++){
        trie.insert(dict[i])
    }
    // Get the pointer to the root of the trie
    let currentNode = trie.root;
    // iterate over the word
    for (let i=0; i<word.length; i++){
        let char = trie.getIndex(word[i]);
        // if the prefix of word does not exist, word would not either
        if (currentNode.children[char] == null){
            return `${concatOfTwoWords.length} ${ concatOfTwoWords.join(" ")}`;
        }
        // if the substring of the word exists as a word in trie, check whether rest of the word also exists, if it does return true
        else if (currentNode.children[char].isEndWord === true && trie.search(word.substring(i+1))){
            //console.log(word.substring(0,i+1) + ':' + word.substring(i+1));
            concatOfTwoWords.push(word.substring(0,i+1) + ':' + word.substring(i+1));
            //return word.substring(i+1)
        }
        currentNode = currentNode.children[char]
    }

    return  0;
}

const readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ternimalInputs = [];

r1.on('line', function(line) {

    ternimalInputs.push(line);
    // Stop when the array is 8 values long
    if (ternimalInputs.length == 9) {
        r1.close();
    }
});



r1.on('close', function() {

    let dict = ternimalInputs.slice(1,6);
    let words = ternimalInputs.slice(7,9);

    console.log('Вывод');
    console.log(PossibleConcats(dict,words[0]));

    console.log(PossibleConcats(dict,words[1]));
});

