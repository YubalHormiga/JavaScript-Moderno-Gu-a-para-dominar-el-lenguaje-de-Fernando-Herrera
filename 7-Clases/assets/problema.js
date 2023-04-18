const yubal = {
    nombre: 'Yubal',
    edad: 35,
    imprimir() {
        console.log(`${this.nombre} ${this.edad}`)
    }
}
yubal.imprimir()

function  Persona( nombre, edad){
    this.nombre = nombre;
    this.edad = edad
    this.imprimir = function(){
        console.log(`${this.nombre} ${this.edad}`)
    }
}

const yubalH = new Persona( 'Yubal', 37)
console.log(yubalH.imprimir())