class Singleton {
    static instacia;
    nombre ='';
    constructor(nombre =''){
        if(!!Singleton.instacia){
            return Singleton.instacia
        }

        Singleton.instacia = this;
        this.nombre= nombre
    }
}

const instacia1 = new Singleton('Yubal')
console.log(`nombre en la instacia1 es ${instacia1.nombre}`)