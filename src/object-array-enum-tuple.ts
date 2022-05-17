/**
 * Object 
 */

// const user: {
//     name: string;
//     age: number;
//     isLoggedIn: boolean;
// } = {}

const user:{
    name: string;
    age: number;
    height?: number; //? thuộc tính có cũng đươc, k có cũng được
    weight?: number; // ? optional properties
    isLoggedIn: boolean | string | number; // union type
    role: number;
} = {
    name: 'Quy',
    age: 20,
    isLoggedIn: true,
    role: 1, 
}

const ADMIN = 1;
const CLIENT = 2;
//Enum (giống như là custom type)
enum Role {
    ADMIN,
    CLIENT
}

console.log(Role.ADMIN)

if(user.role  === ADMIN){
    console.log("admin");
} else {
    console.log("client")
}

/**
 * Array
 */
const numbers: number[] = [];
numbers.push(1); //ok
// number.push('2'); //ERR
const rappers: Array<string> = ['Binz', 'Đen'];


/**
 * Tuple (mảng hỗn hợp)
 */
const person: [string, number, boolean] = ['Quy', 2000, true];