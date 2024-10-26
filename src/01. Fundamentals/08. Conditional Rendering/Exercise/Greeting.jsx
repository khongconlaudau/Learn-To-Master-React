const GoodMorning = () => <h1>Good Morning</h1>;
const GoodAfternoon = () => <h1>Good Afternoon</h1>;

const Greeting = ({timeOfDay}) =>{
    return timeOfDay === "morning" ? <GoodMorning /> : <GoodAfternoon />
}

export default Greeting;