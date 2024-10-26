const App = () =>{
    return (
      <User
        img="src\01. Fundamentals\06. Prop\GG.jpg"
        name="Duc Manh Van"
        age="20"
        job="student"
      />
    );
}

// const User = (props) =>{
//     console.log(props);
//     return <section></section>
// }

const User = ({img, name, age, job}) =>{
    return <section>
        <img src={img} alt="Me" width="200px"/>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Job: {job}</h1>
    </section>
}
export default App;