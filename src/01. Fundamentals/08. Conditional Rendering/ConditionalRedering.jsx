const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) =>{
    if(isValid){
        return <ValidPassword/>
    }
    return <InValidPassword/>

    OR

    return isValid ? <ValidPassword/> : <InValidPassword/>;
}



const Cart = () =>{
    const items = ["Banana", "Apple", "Cherry", "Mango"];

    return <section>
        <h1>Cart 🛒</h1>
        {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

        <ul>
            <h4>Products</h4>
            {
                items.map((item) =>(
                    <li key={Math.random()}>{item}</li>
                ))
            }
        </ul>
    </section>
}
const App = () => {
    return <div>
        <Cart/>
    </div>
}

export default App;