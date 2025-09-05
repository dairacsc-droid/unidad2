console.log("hola");

//creamos la clase
class Person{
    #cellphone;
    //creamos la "funcion"
    constructor(firstname, lastname, age, heigth, weigth, pet,cellphone) {
        this.firstname= firstname;
        this.lastname= lastname;
        this.age=age;
        this.heigth= heigth;
        this.weigth= weigth;
        this.pet = pet;
        this.#cellphone=cellphone;
    }
    sayHello(){
        console.log("Hola a todos ");
    }
    introduce(){
        return `Hola, me llamo ${this.firstname} ${this.lastname} y soy chef en el restaurante ${this.restaurant}`
    }
    
    getCellphone(){
        return this.#cellphone;
    }
}
//instanciamos 
let datos1=new Person("daira", "cruz", 18, 1.60, 50, "melina", "123456789")
//el objeto
console.log(datos1);
console.log(datos1.heigth);
console.log(datos1.lastname);
console.log(datos1.pet);

datos1.sayHello();
console.log(datos1.introduce())

console.log(datos1.Cellphone);
console.log(datos1.getCellphone());


class Chef extends Person{
    constructor(firstname, lastname, age, heigth, weigth, pet,cellphone, restaurant, favoritefood) {
        super(firstname, lastname, age, heigth, weigth, pet,cellphone);

        this.restaurant= restaurant;
        this.favoritefood= favoritefood;
    }
}
let chef1= new Chef("daira", "cruz", 18, 1.60, 50, "melina", "123456789", "tuki", "pasta");
console.log(chef1);
console.log(chef1.lastname);
