import React, { useState } from 'react'

interface UserProfileState{
    name: string,
    age: number,
    email: string,
}
const UserProfile = () => {

    const [profile, setProfile] = useState<UserProfileState>({
        name: "",
        age: 0,
        email: "",
    })

   const updateName = (name: string) =>{
    setProfile((prevProfile) =>(
        {...prevProfile, name }
    )
    );
   }

   const updateEmail = (email: string) =>{
    setProfile((prevProfile) =>(
        {...prevProfile, email}
    ))
   }



  return (
    <div>
        <h2>User Profile</h2>
        <form >
            <input type="text" placeholder='Name'value={profile.name} onChange={(e) => updateName(e.target.value)}/>
            <input type="number" placeholder='Age' value={profile.age} onChange={e => setProfile({...profile, age: +e.target.value})}/>
            <input type="email" placeholder='Email'value={profile.email} onChange={(e) => updateEmail(e.target.value)}/>
        </form>

        <h2>Profile Summary</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Email: {profile.email}</p>

    </div>
  )
}

export default UserProfile