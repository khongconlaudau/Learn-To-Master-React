import React, { FC, ReactNode } from "react";

// const User = ({name, age, isStudent} : {name:string, age:number, isStudent:boolean}) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{isStudent}</p>
//     </div>
//   )
// }

// * OR with type declaration
// type UserType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// const User = ({ name, age, isStudent }: UserType) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{isStudent}</p>
//     </div>
//   );
// };


// * OR with Interface
// interface UserType {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// const User = ({ name, age, isStudent }: UserType) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{isStudent}</p>
//     </div>
//   );
// };

// * OR USING WITH FUNCTION COMPONENT
type UserType = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User : FC<UserType> = ({ name, age, isStudent }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isStudent}</p>
    </div>
  );
};

// * Render Children
// const User = ({children} : {children:ReactNode}) =>{
//   return <div>
//     <p>{children}</p>
//   </div>
// }
export default User;
