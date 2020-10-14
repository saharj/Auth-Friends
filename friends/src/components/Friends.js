import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

function Friends(props) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    if (friends.length === 0) {
      axiosWithAuth()
        .get("/friends")
        .then((res) => {
          setFriends(res.data);
        });
    }
  }, [friends]);
  return (
    <div>
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
