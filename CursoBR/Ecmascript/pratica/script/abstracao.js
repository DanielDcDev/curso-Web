class contaBancaria{

    constructor(){
        this.agencia = 1000
        this.numeroConta = 1233
        this.saldo = 50.0
        this.limite = 1500.0
    }
depositar(valorDeposito){
    this.saldo += valorDeposito
}
sacar(valorSaque){
    this.saldo -= valorSaque

}
consultarSaldo(){
    return this.saldo;
}

}

let x  = new contaBancaria()
let y  = new contaBancaria()

console.log(x.consultarSaldo())
x.depositar(230)
console.log(x.consultarSaldo())
