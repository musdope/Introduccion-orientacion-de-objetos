/*Definicion de clases*/
class cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente
{
    numero;
    #saldo;
    agencia;

    constructor(){
        this.numero = '';
        this.#saldo = 0;
        this.agencia = '';

    }
    depositoEnCuenta(valor){
        if(valor > 0 )
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}

cuentaDeLeonardo = new cuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El saldo actual es '+saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log('El saldo actual es '+saldo);