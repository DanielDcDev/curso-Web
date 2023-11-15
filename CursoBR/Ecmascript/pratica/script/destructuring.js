//destructuring

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

//let [a, b, , c] = frutas //pular um indice
let [a, b = 'Abacate', c, d, e = 'Banana'] = frutas

//console.log(a,b,c,d,e)
let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]
let [,[,n]] = coisas
let [[, ,n3]] = coisas
console.log(n3)