var data = new Date();
var data2 = new Date();
var data3 = new Date();

/*
console.log(data.getDate() + '/' + (data.getMonth() +1)+'/' + (data.getFullYear()));
var ano = data.getFullYear()
console.log(ano); */

//adicionar / remover dias
console.log(data.toString());
data.setDate(data.getDate()+3);
console.log(data.toString());
console.log('-----------------------');
//adicionar / remover mes
console.log(data2.toString());
data2.setMonth(data2.getMonth() - 4);
console.log(data2.toString());
console.log('-----------------------');
//adicionar / remover ano
console.log(data3.toString());
data3.setFullYear(data3.getFullYear() + 3);
console.log(data3.toString());
console.log('-----------------------');
console.log('-----------------------');
console.log('-----------------------');
console.log('-----------------------');


var dt1 = new Date(2017, 0, 15);
var dt2 = new Date(2016, 1, 24);

console.log(dt1.toString());
console.log('-----------------------');
console.log(dt2.toString());