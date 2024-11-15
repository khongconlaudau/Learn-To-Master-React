import React from 'react'
import { AdminType } from './Types'
type AdminInforList = {
    admin: AdminType
}
const AdminInfor : React.FC<AdminInforList> = ({admin}) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>Id: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
}

export default AdminInfor