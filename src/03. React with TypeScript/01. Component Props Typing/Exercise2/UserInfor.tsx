import React from 'react'
import { UserType } from './Types'

type UserTypeList = {
     user: UserType,
};
const UserInfor : React.FC<UserTypeList> = ({user}) => {
  return (
    <div>
        <h2>User Information</h2>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserInfor