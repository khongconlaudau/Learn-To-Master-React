import React from 'react'
import UserInfor from './UserInfor'
import AdminInfor from './AdminInfor'
import { UserType, AdminType } from './Types'
const App = () => {
    const user : UserType= {
        id: 1,
        name: "Mason Van",
        email: "xxx@gmail.com"
    };

    const admin: AdminType = {
      id: 2,
      name: "Mason Van",
      email: "xxx@gmail.com",
      role: "admin",
      lastLogin: new Date
    };
  return (
    <div>
        <UserInfor user={user}/>
        <AdminInfor admin={admin}/>
    </div>
  )
}

export default App