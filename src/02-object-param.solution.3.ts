import { expect, it } from "vitest";
import { K } from "vitest/dist/global-60f880c6";

interface AddTwoNumbersArgs {
  first: number;
  second: number;
}


export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
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

/* 
Differentiation interface & type

interface Base {
  id: string;
}

interface AddTwoNumbersArgs extends Base {
  first: number;
  second: number;
}
*/

// Deconstructed params
export const addTwoNumbers = ({
  first, // Deconstructed params
  second, // Deconstructed params
}:{
  first: number; // type decoration
  second: number; // type decoration
}) => {
  return params.first + params.second;
}