export class cuenta {
    #cliente;
    #saldo;

    constructor (cliente, numero, agencia, saldo) {

        if (this.constructor == cuenta) {
            throw new console.error('no se debe instanciar objetos de la clase cuenta');
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        //metodo abstracto
           throw new Error('debe implementar el metodo cuenta en su clase');
        }

    _retirarDeCuenta(valor, comision) {
        valor = valor * (1+comision/100);

        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }

    prueba(){
        console.log('metodo padre')
    }
}
