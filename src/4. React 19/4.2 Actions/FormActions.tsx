import React from "react";

const FormActions = () => {
  const formAction = (formData : any) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(userData);
    
  };
  return (
    <form action={formAction}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" />
      <br />

      <label htmlFor="email">Email: </label>
      <input type="emai" id="email" name="email" />
      <br />

      <label htmlFor="password">Passwrod: </label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormActions;
