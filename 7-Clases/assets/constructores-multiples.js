class Persona {

    static porObjeto({nombre,apellido, pais}){
        return new Persona(nombre,apellido,pais)
    }
    constructor(nombre,apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais
    }
    getInfo(){
        console.log(`${this.nombre} ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Melisa'
const apellido1 = 'Hormiga'
const pais1  = 'España'

const Yubal = {
    nombre:'Yubal',
    apellido: 'Peres',
    pais : 'Reino'
}

const persona1 = new Persona(nombre1,apellido1,pais1)
const persona2 = Persona.porObjeto(Yubal)
persona1.getInfo()
persona2.getInfo()
    

