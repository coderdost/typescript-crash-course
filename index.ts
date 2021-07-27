// type annotations
let fullName:string = "jack";

// array assignments
const names:string[] = [];
names.push("hi");

// function assignments
function sum(a:any, b:any):number{
    return a+b;
}
// console.log(5 * sum('a','b'))

// Tuples

let address : [number, string, number];
address = [111,"delhi",31111]

// Objects with Properties

let person : {name: string};
person = {name:'john'};

// Object with Optional Properties

let anotherPerson : {name: string,age?:number};
anotherPerson = {name:'john',age:20};
anotherPerson = {name:'jack'};

// Function with Optional Properties

function add(a:string,b?:string){
    return b ? a+b : a
}
console.log(add('a'))
console.log(add('a','c'))

// Interface

interface Person{
    name: string;
    age: number;
    id: number;
}

let p:Person;
p = {name: 'jack',age:40, id:1};

// Intersection 

interface Student{
    name: string;
    age: number;
    rollNo : number;
}


let p1: Person | Student;
p1 = {name:'jack',age:1,rollNo:1};
p1 = {name:'john',age:1,id:1};


// Union 

let p2: Person & Student;
p2 = {name:'jack',age:1,rollNo:1, id:2};


// type aliases

type Count = string | number;
let c : Count;
c = 1.2;
c = 'a';
// c = false;


// Class 

class Car{
    brand;
    constructor(brand){
        this.brand = brand
    }
    getModel(){
        console.log(this.brand)
    }
}

let c1 = new Car('Audi');
c1.getModel();

// Public

class CarX{
    constructor(public brand){
    }
    getModel(){
        console.log(this.brand)
    }
}

let c2 = new CarX('BMW');
c2.getModel();
console.log(c2.brand)

// Private

class CarY{
    constructor(private brand){
    }
    getModel(){
        console.log(this.brand)
    }
}

let c3 = new CarY('Mercedez');
c3.getModel();
// console.log(c3.brand);

 
// Protected

class CarZ{
    constructor(private brand){
    }
    getModel(){
        console.log(this.brand)
    }
}

let c4 = new CarZ('Volvo');
c4.getModel();
// console.log(c4.brand)

// Implements keyword

interface ICar{
    brand: string;
    model: string;
}

interface ICar2{
    release: number
}

class CarC implements ICar, ICar2{
    constructor(public brand: string, public model: string, public release: number){

    }
}

// Generics

function adder<T>(a:T,b:T): Array<T>{
    return [a,b];
}

console.log(adder<string>('1','2'));
console.log(adder<number>(1,2));
console.log(adder<Array<number>>([1],[2]));

// extends in Generic

function addPerson<T extends {id:string}>(person:T): string{
    return person.id;
}

