// * Example 1

// const Button = () =>{
//     const handleClick = () =>{
//         console.log("You clicked the button");
//     }

//     return <button onClick={handleClick}>Click me</button>
// }

// * Example 2

// const Copy = () =>{
//     const handleCopy = () =>{
//         console.log("Stop coppying my work");
        
//     }
//     return <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam in hic nihil molestias provident blanditiis quia vero, autem illum rerum aliquam doloremque. Quam impedit quidem doloribus earum animi maiores perspiciatis?</p>
// }


// * Example 3
const Mouse = () =>{
    const handleMouseMove = () =>{
        alert("Mouse moved")
    }

    return <p onMouseOver={handleMouseMove}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut vel voluptatum obcaecati rem in officia fugit quae. Rem minus debitis vero commodi vitae quidem quae quos porro nisi modi?</p>
}
const App = () =>{
    return <div>
        {/* <Button /> */}
        {/* <Copy /> */}
        <Mouse />
    </div>
}

export default App;