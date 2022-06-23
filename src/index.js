module.exports = function toReadable(number) {
    let obj = {
        0: '',
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: 'eighty',
        90: "ninety",
        1000: 'thousand',
        1000000: "million"
    }


    if (number === 0) {
        return 'zero'
    }
    if (obj.hasOwnProperty(number)) {
        return obj[number]
    }

    let arr = number.toString().split('').reverse();
    let res = [];
    let word = [];

    for (let i = 0; i < arr.length; i += 3) {
        const chunk = arr.slice(i, i + 3);
        res.push(chunk.reverse());
    }
    for (let i = 0; i < res.length; i++) {
        word[i] = Num(res[i]);
    }

    function Num(arr) {
        let num = +arr.join('');
        let lastTwoNumbers = obj[num % 100 - num % 10] + " " + obj[num % 10]
        if (arr.length === 2) {

            return lastTwoNumbers;
        }
        if (arr.length === 3) {
            return obj[Math.trunc(num / 100)] + ' hundred ' + lastTwoNumbers;
        }
    }
    if (word.length === 1) {
        return word.join('')
    }
    word = word.reverse()
    return word[0] + ' thousand ' + word[1]

    // word = word.reverse()
    // console.log(word)
    // let ans = '';
    // let pow = word.length + 1;
    // for (let i = 0; i < word.length; i++) {
    //     ans = ans + ' ' + word[i] + `${Math.pow(10,pow)}`
    //     pow = pow - i
    //     console.log(ans)
    // }
    //console.log(number % 100 - number % 10)
    // console.log(number % 100 - number % 10)
}