// named function

function add(a, b){
    return a + b;
}

// anonymous functions

// classic

// function expression - przypisanie deklaracji fn do zmiennej
const add1 = function(a, b){
    return a + b;
}

// arrow functions
// - lexical this (nie ma this, bierze z enclosing)
// - nie ma obiektu arguments


const add2 = (a, b) => {
    return a + b;
}

// wariancje składni arrow function

const add3 = () => { return 42 }
const add4 = a => { return 42 + a } // niezalecane
const add5 = (a, b) => {return a + b }
const add6 = (a, b) => a + b; // implicit return

const magic = x => x <= 42;
const magic2 = (x) => x <= 42;
const magic3 = (x) => {
    return x <= 42
};

// napisz fe, które zwraca obiekt {x: 42}
const magic4 = () => {
    return {
        x: 42
    }
}

const magic5 = () => ({x: 42});

const magic6 = (x) => ({x}); // short object notation


