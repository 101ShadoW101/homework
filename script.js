let str = 'aaa@bbb@ccc'
console.log(str.replaceAll('@', '!'));


let HelloWorld = 'HELLOWORLD'
console.log(HelloWorld.toLowerCase())


let a = 'alex'
console.log(a.substring(0, 1).toUpperCase() + a.substring(1))

console.log(Math.random())


let name = 'Lex Luter has a big suit'
let nam1 = (name.slice('11', '12'));
let nam2 = (name.slice('0', '1'));
let nam3 = (name.slice('1', '2'));
let nam4 = (name.slice('2', '3'));

console.log(`${nam1}${nam2}${nam3}${nam4}`.toLowerCase())

let lorem = 'Lorem ipSum dolor, sit amet consectetur adipisicing elit. Beatae assumenda molestiae aperiam accusamus obcaecati repellat placeat veniam ullam iste deleniti, necessitatibus impedit natus illo corporis dignissimos perferendis alias eum consequatur.'
let lr1 = (lorem.slice('8', '9'))
let lr2 = (lorem.slice('23', '24'))
let lr3 = (lorem.slice('24', '25'))
let lr4 = (lorem.slice('20', '21'))
let lr5 = (lorem.slice('2', '3'))

console.log(`${lr1}${lr2}${lr3}${lr4}${lr5}`)