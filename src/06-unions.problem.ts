/*
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
}
*/


type Role = "admin" | "user" | "super-admin";

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};

const logRole = (role : Role) => {};

logRole('awdawd')


// discriminated union
type User = ({ // base type intersect with another type which can be 1/3 possible things
  id: number;
  firstName: string;
  lastName: string;
}) & ({ // & merge this with different object type
  role: 'admin';
  adminPassword: string;
} | {
  role: 'user';
} | {
  role: 'super-admin';
  superAdminPassword: string;
})