import React, { ChangeEvent, FormEvent, useState } from "react";

interface ContactType {
    email: string,
    name: string,
}
const ContactForm = () => {
    const [contact, setContact] = useState<ContactType>({
        name: "",
        email: "",
    }) 

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        console.log(event.target);
        
        setContact((prevContact) => ({...prevContact, [name]: value}))
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log("Form submited: ",contact);
        
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="input" name="name" value={contact?.name} onChange={handleChange}/>
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" value={contact?.email} onChange={handleChange}/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
