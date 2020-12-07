//¿Cómo harías print/log de la edad de John?
function edad(x) {
    console.log(x[1].age);
}
edad([{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }]);
console.log(x[1].age);

//¿Cómo harías print/log del nombre del primer objeto?
function primero(x) {
    console.log(x[0].name);
}
var x = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];
console.log(x[0].name);

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
function nombreedad(x) {
    for (i = 0; i < x.length; i++) {
        console.log(x[i].name, x[i].age);
    }
}
z = nombreedad([{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }]);

//¿Cómo harías para imprimir el nombre de los mayores de edad?
function mayordeedad(x) {
    for (i = 0; i <x.length; i++) {
        if (x[i].age > 18) {
            console.log(x[i].name);
        }
    }
}
z = mayordeedad([{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }]);