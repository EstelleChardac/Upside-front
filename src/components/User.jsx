import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersList = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/users`);
      setUsers(data);
    };
    getUsersList();
  }, []);
  console.log(users);

  return (
    <div>
      <div className="m-4">
        <h2>- USERS - </h2>
        {users &&
          users.map(({ id, firstname, lastname, email }) => (
            <div key={id}>
              <p>{firstname}</p>
              <p>{lastname}</p>
              <p>{email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default User;
