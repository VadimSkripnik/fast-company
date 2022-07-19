import React from "react";
import User from "./user";

const Users = (props) => {
  return (
    <div>
      {props.users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, index) => (
              <User
                key={user._id}
                id={index}
                {...user}
                delete={props.onDelete}
                change={props.onToggleBookMark}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
