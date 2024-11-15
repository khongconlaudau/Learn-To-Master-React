import React, { useEffect, useState } from 'react'

type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
};

const UserList = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() =>{
    const fetchData = async () =>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!res.ok){
                throw new Error("Network response was not ok")
            }
            const result = await res.json();
            setData(result);
        }catch(error) {
            setError(error instanceof Error ? error.message : "An error orcurred");
        }finally{
            setLoading(false);
        }
       
    }
    fetchData();
  },[]);

  if(loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList