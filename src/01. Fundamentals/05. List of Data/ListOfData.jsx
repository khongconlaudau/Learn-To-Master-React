// Example 1
// const App = () =>{
//     const numbers = [5, 6, 7, 8, 9, 10];
//     return(
//         <main>
//             {
//                 numbers.map((num) =>(
//                     <ul key={num}>
//                         <li>{num}</li>
//                     </ul>
//                 ))
//             }
//         </main>
//     );
// }


// Example 2
// const App = () =>{
//      const usersInfo = [
//     {
//       username: "HuXn",
//       email: "test@gmail.com",
//       location: "USA",
//     },
//     {
//       username: "John",
//       email: "jd@gmail.com",
//       location: "Arab",
//     },
//     {
//       username: "Alex",
//       email: "alexmersion@gmail.com",
//       location: "India",
//     },
//   ];

//   return (
//     <main>
//         {
//             usersInfo.map((element) =>(
//                 <ul key={Math.random()}>
//                     <li>{element.username}</li>
//                     <li>{element.email}</li>
//                     <li>{element.location}</li>
//                 </ul>
//             ))
//         }
//     </main>
//   );
// }

// Eg2: With Destructuring 
// const App = () =>{
//        const usersInfo = [
//       {
//         username: "HuXn",
//         email: "test@gmail.com",
//         location: "USA",
//       },
//       {
//         username: "John",
//         email: "jd@gmail.com",
//         location: "Arab",
//       },
//       {
//         username: "Alex",
//         email: "alexmersion@gmail.com",
//         location: "India",
//       },
//     ];

//     return(
//         <main>
//             {
//                 usersInfo.map(({username, email, location}) =>(
//                     <ul key={Math.random()}>
//                         <li>{username}</li>
//                         <li>{email}</li>
//                         <li>{location}</li>
//                     </ul>
//                 ))
//             }
//         </main>
//     );
// }


// Example 3
import "./Shopping.css"
const Shopping = ({items}) =>{
    return (
        <section>
            <ol>
                {
                    items.map((item) =>(
                        <li key={Math.random() * 5}>{item}</li>
                    ))
                }
            </ol>
        </section>
    );
}

const App = () =>{
    const items=["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]
    return(
        <section>
            <Shopping items={items}/>
        </section>
    );
}
export default App;