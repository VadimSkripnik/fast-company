import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [bookmark, setBookmark] = useState(false);

  const handleDelete = (userId) => {
    setUsers(users.filter((user, index) => index !== userId));
  };

  const handleToggleBookMark = (id) => {
    let newUsers = [...users];
    newUsers.forEach((user) => {
      if (user._id === id) {
        if (!bookmark) {
          user.bookmark = true;
          setBookmark((prevState) => (prevState = true));
        } else {
          user.bookmark = false;
          setBookmark((prevState) => (prevState = false));
        }
      }
    });
    setUsers(newUsers);
  };

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанет";
    return "человек тусанет";
  };

  return (
    <div>
      <SearchStatus users={users} onRenderPhrase={renderPhrase} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </div>
  );
};

export default App;
