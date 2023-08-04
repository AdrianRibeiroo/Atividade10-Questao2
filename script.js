function potencia(a, b) {
    let pot = 1;
    for (let i = 1; i <= b; i++) {
        pot *= a;
    }
    return pot;
}

let x = parseInt(prompt('Digite um valor de base'));
let y = parseInt(prompt('Digite um valor de expoente'));

let z = potencia(x, y);
alert(`Resultado: ${z}`);
