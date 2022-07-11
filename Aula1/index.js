class cliente
{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}

const cliente1 = new cliente(); 

cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "13232";
cliente1.numeroCuenta = "232323";
cliente1.saldoCuenta = 2000;

const cliente2 = new cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.numeroCuenta = "1234324343";
cliente2.saldoCuenta = 1000;

const cliente3 = new cliente();

cliente3.nombreCliente = "Leonardo";
cliente3.dniCliente = "13804050";
cliente3.numeroCuenta = "1234324343";
cliente3.saldoCuenta = 1000;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);