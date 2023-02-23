import React, { Fragment, useState } from "react";
import './App.css';

function App() {

  const [name, setName]= useState("");
  const [users, setUsers]= useState([]);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const users = await fetch(`http://localhost:5000/database/?name=${name}`);

      const parseResponse = await users.json();

      setUsers(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className="conatainer text-center">
     <h1 className="my-5">Party List</h1> 
     <form className="d-flex" onSubmit={onSubmitForm}>
      <input type="text" name="name" placeholder="Enter user ..." className="form-control" value={name}
            onChange={e => setName(e.target.value)}/>
      <button className="btn btn-success">Submit</button>
     </form>
     <table className="table my-5">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.user_id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && <p>No Results Found</p>}
     </div>
    </Fragment>
  );
}

export default App;
