import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

function AddFriend(props) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const addFriend = (e) => {
    e.preventDefault();
    props.addFriend(newFriend);
    setNewFriend({ name: "", age: "", email: "" });
  };

  return (
    <div>
      <form onSubmit={addFriend}>
        <label>
          name:
          <input
            type="string"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          age:
          <input
            type="string"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
          />
        </label>
        <label>
          email:
          <input
            type="email"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
          />
        </label>
        <button>Add friend</button>
      </form>
    </div>
  );
}

export default AddFriend;
