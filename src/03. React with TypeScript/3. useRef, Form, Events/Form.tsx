import React, { FormEvent, useRef, useState } from 'react'
type formData = {
    name: string,
    email: string,
    password: string,
}


const Form = () => {
  const [data, setData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  })

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passwordVal = password.current!.value;

    setData({
        name: nameVal,
        email: emailVal,
        password: passwordVal,
    })
  }

  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder='Enter ur name' ref={name} />
            <input type="text" placeholder='Enter your email' ref={email}/>
            <input type="text" placeholder='Enter ur password' ref={password}/>
            <button type='submit'>Submit</button>            
        </form>

        <section>
            <h1>Name: {data.name}</h1>
            <h1>Email: {data.email}</h1>
            <h1>Password: {data.password}</h1>
        </section>
    </div>
  )
}

export default Form