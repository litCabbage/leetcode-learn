/**
 * 最简单的方法
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
    }
    return s === ''
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [],
        len = s;
    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < len; i++) {
        
    }
}

console.log(isValid('(((((())))))'));