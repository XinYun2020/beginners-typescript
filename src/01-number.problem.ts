import { expect, it } from "vitest";

// extension from Matt Pocock => TypeScript Error Translator
/* 
export const addTwoNumbers = (a, b) => {
  return a + b;
}; 
*/

/* 
haven't specify type for a b 
TypeScript is kind of enforcing a contract here on our function 
to make sure our function can't be passed anything bad
*/
export const addTwoNumbers = (a: number, b: number): number  => { // must return a number 
  return a + b;
};

// vitest
it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});



// # EXTRA
const firstName = 'Alice' // is being inferred as a string 推断为一个字符串
// const firstName: string = 'Alice' // don't need to 


const logName = (name: string) => {
  console.log(name);
}

logName(firstName)

/* 

$ yarn tsc - check entire project and find the # of errors 
  - know there is problem to be fixed (good way test the types from the top level to bottom)

*/
