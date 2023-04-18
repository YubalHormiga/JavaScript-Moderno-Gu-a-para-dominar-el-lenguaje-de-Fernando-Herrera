class Rectangunlo {
    #area = 0
    constructor(base = 0, altura = 0) {
        this.base = base
        this.altura = altura
        this.area = base * altura
    }

}
const rectangulo1 = new Rectangunlo(3,5)
console.log(rectangulo1)