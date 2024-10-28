import { createContext } from "react";
import Component3 from "./Components/Component3";
import Component2 from "./Components/Component2";


export const Data = createContext();
export const Data2 = createContext();
const DropDrilling = () => {
  const name = "Duc Manh Van";
  const age = 20

  // * With Context API
//   return <Data.Provider value={name}>
//     <Component3/>
//   </Data.Provider>;

    //* Multi values with Context API
    return <Data.Provider value={name}>
        <Data2.Provider value={age}>
            <Component3 />
        </Data2.Provider>
    </Data.Provider>


    //* Without Context API
    // return <div>
    //     <Component2 name={name}/>
    // </div>
};

export default DropDrilling;
