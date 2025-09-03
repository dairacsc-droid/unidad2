console.log("vuivuivuiviuvviuv");
 let person={
    nombre: "daira",
    apellido: "cruz",
    edad:18,
    telefono: 152469873,
    direccion: "avenida 879 jr Tren",
 }

 console.log(person);
 
 //accediendo a los atributos: (corchetes y puntos)
console.log(person.edad);
console.log(person["telefono"]);
console.log(person.nombre);
console.log(person.apellido);
console.log(person.direccion);


person.hoobies=["hacer postres", "escuchar música", "resolver matemáticas"]
person.direccion="jr marte, frente a jupiter";

console.log(person);

let person2={ ...person }

person2.nombre= "juanito";
person2.edad= "120";
person2.direccion="area-51"

console.log(person2)

//ejemplo de clase
let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

console.log(heroes.members[1].name);
console.log(heroes.members[1].powers[2]);
console.log(heroes.members[2].powers[4]);