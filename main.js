function Veiculo(nome, quantidadeRodas, motor) {
    this.nome = nome;
    this.quantidadeRodas = quantidadeRodas;
    this.motor = motor;
}

function Carro(nome, fabricante, quantidadePortas, ano) {
    Veiculo.call(this, nome, 4, true);
    this.quantidadePortas = quantidadePortas;
    this.fabricante = fabricante;
    this.ano = ano;

    this.descrever = function() {
        console.log(`O carro ${nome} ano ${ano}, ${quantidadePortas} portas é da fabricante ${fabricante}.`)
    }
}

function Bicicleta(nome, modelo, cor) {
    Veiculo.call(this, nome, 2, false);
    this.modelo = modelo;
    this.cor = cor;
    this.falarCor = function() {
        console.log(`A bicicleta ${nome}, modelo ${modelo} tem a cor ${cor}.`)
    }
}

const ka = new Carro('Ka', 'Ford', 4, 2018);
const civic = new Carro('Civic', 'Honda', 4, 2021);
const caloi = new Bicicleta('Caloi', 'Caloi Max', 'Azul');

ka.descrever();
civic.descrever();
caloi.falarCor();