/*Definicion de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCoriente.js';

const cliente = new Cliente('Leonardo','1398641','432344');
const cliente2 = new Cliente('Maria','f6esger','21346g');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');


let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);


console.log(CuentaCorriente.cantidadCuentas)


