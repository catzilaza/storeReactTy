import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { useAppSelector, useAppDispatch } from "../store/store";
import { loginUser, getLoginUser } from "../store/userFeature/userSlice";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/feature/counter/counterSlice";

export interface User {
  _id: string;
  user_name: string;
  user_firstname: string;
  user_lastname: string;
  user_telephone: string;
  user_address: string;
  user_email: string;
  user_password: string;
  user_token: string;
  user_level: string;
}

type Props = {};

function UserLoginPage({}: Props) {
  const [data, setData] = useState<User>();
  const [error, setError] = useState<any>(null);

  // const user = useAppSelector((state) => state.user.users); 
  // const userStore: User[] = []

  const count = useAppSelector((state) => state.counter.value); 
  const dispatch = useAppDispatch();

  console.log("UserLoginPage() : ", count);

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
          {/* <tbody>
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
          </tbody> */}
        </Table>
      </div>


      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Increment By amount"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment By amount 5
          </button>
        </div>
      </div>
    </>
  );
}

export default UserLoginPage;
