import { expect, it } from "vitest";

// { first, second } // object types?
// type now represents an object which we now must pass into the function arg
type Params = {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: Params) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});


// solution 3 ways to type this params