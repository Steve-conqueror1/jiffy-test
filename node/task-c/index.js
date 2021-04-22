"use strict";
const Trie = require('./trie');

function PossibleConcats(dict, word){

    const concatOfTwoWords = [];

    let trie = new Trie()
    for (let i=0; i<dict.length; i++){
        trie.insert(dict[i])
    }

    let currentNode = trie.root;
    // iterate over the word
    for (let char of [...word]){
        let index = word.indexOf(char);

        if (!currentNode.children.has(char)){

            return `${concatOfTwoWords.length} ${ concatOfTwoWords.join(" ")}`;
        }
        // if the substring of the word exists as a word in trie, check whether rest of the word also exists
        else if (currentNode.children.get(char).isEndWord === true && trie.search(word.substring(index+1))){
            concatOfTwoWords.push(word.substring(0,index+1) + ':' + word.substring(index+1));

        }
        currentNode = currentNode.children.get(char);
    }

    return  0;
}



const readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let terminalInputs = [];

r1.on('line', function(line) {

    terminalInputs.push(line);

    if (terminalInputs.length == 9) {
        r1.close();
    }
});



r1.on('close', function() {

    let dict = terminalInputs.slice(1,6);
    let words = terminalInputs.slice(7,9);

    console.log('Вывод');
    console.log(PossibleConcats(dict,words[0]));

    console.log(PossibleConcats(dict,words[1]));
});

