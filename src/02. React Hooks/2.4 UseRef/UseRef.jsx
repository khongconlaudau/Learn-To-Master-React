// import { useRef } from "react";

import Timer from "./Exercise/Timer";

// const UseRef = () => {
//   const inputElement = useRef(null);

//   const action = () => {
//     inputElement.current.focus();
//     inputElement.current.value = "Duc Manh Van";
//   };

//   return (
//     <div>
//       <input type="text" ref={inputElement} />
//       <button onClick={action}>Focus and Write My Name</button>
//     </div>
//   );
// };

const UseRef = () =>{
  return   <div>
        <Timer/>
    </div>
}
export default UseRef;