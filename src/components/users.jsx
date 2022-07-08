import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const chengePhraseTitle = (arr) => {
    let result;
    const str = String(arr.length).split("");
    let a = str.at(-1);
    let b = str.at(-2);
    if (
      (typeof b === "undefined" && a === "2") ||
      (typeof b === "undefined" && a === "3") ||
      (typeof b === "undefined" && a === "4")
    ) {
      result = "человекa тусонут";
    } else if (
      (b === "1" && a === "2") ||
      (b === "1" && a === "3") ||
      (b === "1" && a === "4")
    ) {
      result = "человек тусонёт";
    } else {
      result = "человек тусонёт";
    }
    return result;
  };

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((el) => el !== userId));
  };
  
  const renderPhrase = (number) => {
    return (
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Провфессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {number.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>
                {item.qualities.map((el) => {
                  return (el = (
                    <span key={el._id} className={`badge bg-${el.color} ms-2`}>
                      {el.name}
                    </span>
                  ));
                })}
              </td>
              <td>{item.profession.name}</td>
              <td>{item.completedMeetings}</td>
              <td>{item.rate + "/5"}</td>
              <td>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => handleDelete(item)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <h2>
        {users.length ? (
          <span className="badge bg-primary">
            {users.length}
            {chengePhraseTitle(users) + " "}с тобой сегодня
          </span>
        ) : (
          <span className="badge bg-danger">Никто с тобой не тусонёт</span>
        )}
      </h2>
      {users.length ? renderPhrase(users) : null}
    </>
  );
};

export default Users;
