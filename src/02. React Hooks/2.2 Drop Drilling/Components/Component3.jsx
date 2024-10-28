import { useContext } from "react";
import { Data, Data2 } from "../DropDrilling";
const Component3 = () => {
  // * Without Context Hooks
  //   return (
  //     <Data.Consumer>
  //       {(name) => {
  //         return (
  //           <Data2.Consumer>
  //             {(age) => {
  //               return (
  //                 <h1>
  //                   Name: {name}, Age: {age}
  //                 </h1>
  //               );
  //             }}
  //           </Data2.Consumer>
  //         );
  //       }}
  //     </Data.Consumer>
  //   );

  // * With Context hooks
  const userName = useContext(Data);
  const age = useContext(Data2);

  return (
    <h1>
      Name: {userName}, Age:{age}
    </h1>
  );
};

export default Component3;
