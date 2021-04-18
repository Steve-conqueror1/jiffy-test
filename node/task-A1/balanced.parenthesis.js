
let isBalancedParenthesis = (str) => {
    let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return `Incorrect`;
        }
    }
    return stack.length === 0 ? `Correct` : `Incorrect `;
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let query = 'Введите строку: \n'

rl.question(query, (str) => {
    console.log(isBalancedParenthesis(str));

    rl.close();
});
