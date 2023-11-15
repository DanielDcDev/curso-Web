Object.prototype.atri50 = 'z'//cuidado ao utilizar

let animal = {atri : 'a'}
let vertebrado = {__proto__: animal, atri2 : 'b'}
let ave = { __proto__: vertebrado, atri3: 'c'} 

console.log(ave.atri3, ave.atri2, ave.atri);