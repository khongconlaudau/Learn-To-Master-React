// *********** JSX Rules *************

// * 1. Return a single root element
// To return multiple elements from a component, wrap them with a single parent tag.

// !Error
// const App = () => {
//   return (
//     <section id="section"></section>
//     <h1>Welcome to React</h1>
//   ) ;
// };

// * 2. Close all the tags
// JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

// !Error 
// const App = () =>{
//     return(
//         <section id="section">
//             <img>
//         </section>
//     );
// }




// * 3. className
// const App = () => {
//   return (
//     <section class="section">
//       <h1 class="title">Hello HuXn</h1>
//     </section>
//   );
// };



// * 4. htmlFor

const App = () => {
  return (
    <section className="section">
      <form>
        <label for="name">Name</label>
        <input type="text" placeholder="Enter Your Name" id="name" />
      </form>
    </section>
  );
};


export default App;