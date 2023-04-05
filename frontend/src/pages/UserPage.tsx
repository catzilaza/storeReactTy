import React, { useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

interface userData {
  user_name: string;
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  user_level: string;
  user_timeStamp: string;
}

function UserPage() {
  const [data, setData] = useState<userData[]>([]);
  const [error, setError] = useState<any>(null);
  //"https://stormy-teal-prawn.cyclic.app/api/user"
  //http://localhost:5000/api/desserts
  //,{headers: {'Authorization': localStorage.getItem('token')}}
  async function getAlldata() {
    await axios
      .get("https://stormy-teal-prawn.cyclic.app/api/user")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {        
        setError(error);
      });
  }
  React.useEffect(() => {
    getAlldata();
  }, []);

  if (!data)
    return (
      <>
        "Loading data!"
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50px",
          color: "#fff",
          fontSize: "30px",
          margin: "10px auto",
          backgroundColor: "#373739",
        }}
      >
        User Management Page
      </div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>User Level</th>
              <th>User Date/Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.user_firstname}</td>
                <td>{item.user_lastname}</td>
                <td>{item.user_name}</td>
                <td>{item.user_email}</td>
                <td>{item.user_level}</td>
                <td>{item.user_timeStamp}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default UserPage;

/* 
const username = ''
const password = ''

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const url = 'https://...'
const data = {
  ...
}

axios.post(url, data, {
  headers: {
    'Authorization': `Basic ${token}`
  },
})

const token = '..your token..'

axios.post(url, {
  //...data
}, {
  headers: {
    'Authorization': `Basic ${token}` 
  }
})
*/
