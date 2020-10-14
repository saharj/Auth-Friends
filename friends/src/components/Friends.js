import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

function Friends(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    if (friends.length === 0) {
      axiosWithAuth()
        .get("/friends")
        .then((res) => {
          setFriends(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [friends]);

  const addFriend = (newFriend) => {
    axiosWithAuth()
      .post("/friends", newFriend)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AddFriend addFriend={addFriend} />
      {friends &&
        friends.map((friend, i) => {
          return (
            <div key={i}>
              <h2>{friend.name}</h2>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Friends;
