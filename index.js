// type assignment
var fullName = "jack";
// array assignments
var names = [];
names.push("hi");
// function assignments
function sum(a, b) {
    return a + b;
}
// console.log(5 * sum('a','b'))
// Tuples
var address;
address = [111, "delhi", 31111];
// Objects with Properties
var person;
person = { name: 'john' };
// Object with Optional Properties
var anotherPerson;
anotherPerson = { name: 'john', age: 20 };
anotherPerson = { name: 'jack' };
// Function with Optional Properties
function add(a, b) {
    return b ? a + b : a;
}
console.log(add('a'));
console.log(add('a', 'c'));
var p;
p = { name: 'jack', age: 40, id: 1 };
var p1;
p1 = { name: 'jack', age: 1, rollNo: 1 };
p1 = { name: 'john', age: 1, id: 1 };
// Union 
var p2;
p2 = { name: 'jack', age: 1, rollNo: 1, id: 2 };
var c;
c = 1.2;
c = 'a';
// c = false;
// Class 
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getModel = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getModel();
// Public
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getModel = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getModel();
console.log(c2.brand);
// Private
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getModel = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('Mercedez');
c3.getModel();
// console.log(c3.brand);
// Protected
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    }
    CarZ.prototype.getModel = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var c4 = new CarZ('Volvo');
c4.getModel();
var CarC = /** @class */ (function () {
    function CarC(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    return CarC;
}());
// Generics
function adder(a, b) {
    return [a, b];
}
console.log(adder('1', '2'));
console.log(adder(1, 2));
console.log(adder([1], [2]));
// extends in Generic
function addPerson(person) {
    return person.id;
}
