import "./style.css"
import { PiAvocadoFill } from "react-icons/pi";
const App = () =>{
    const styles = {color: "skyblue", fontSize:"20px", background:"gray"}
    
    // Inline style
    // return <section style={{color:"red"}}>
    //     Hello World
    // </section>

    // OR
    // return <section style={styles}>
    //     Hello World
    // </section>

    return (
      <h1>
        <PiAvocadoFill />
      </h1>
    );

}

export default App;