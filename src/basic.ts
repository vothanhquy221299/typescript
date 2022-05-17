const sum = (a: number, b: number) => console.log(a+b);

sum(1, 3);

/**
 * Basic types
 */

//constant
const BIRTH_YEAR = 2000;

//String
//Inferred type
let fullName = 'Vo Thanh Quy';

// number
//let age: number
let age = 20;
age = 21;

//boolean 
//let isMarried: boolean
let isMarried: false;

//any
let notSure: any = false;
notSure = 'ok';
