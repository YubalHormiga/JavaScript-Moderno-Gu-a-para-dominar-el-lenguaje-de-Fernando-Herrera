class Persona {
    static _conteo= '';
    static get conteo(){
        return Persona._conteo + ' instacias'
    }
    static otraFrase(){
        console.log('Hola desde método estático')
    }

    nombre = '';
    frase = '';
    codigo = '';
    comida = '';

    constructor(nombre, frase, codigo) {
        this.nombre = nombre;
        this.frase = frase;
        this.codigo = codigo;

        Persona._conteo++
    }


    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase()
    }

    get getComidaFavorita(){
        return `La comida favorita ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}`)
    }



    miFrase() {
        this.quienSoy()
        console.log(`${this.nombre} ${this.frase}`)
    }
}

const superman = new Persona('Yubal', 'Fiuu', 123456)
const spiderman = new Persona('Pedro', 'Fooss', 654321)
// superman.quienSoy()
// superman.miFrase()
superman.setComidaFavorita = 'Fresas'
console.log(superman.getComidaFavorita)
console.log(superman)
console.log(Persona._conteo)
console.log(Persona.conteo)
console.log(Persona.otraFrase())
