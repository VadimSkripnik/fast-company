import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((user) => (
          <Qualitie key={user._id} {...user} />
        ))}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}/5</td>
      <td>
        <Bookmark
          key={props._id}
          toggleBookmark={props.bookmark}
          uniqueId={props._id}
          onChangeBookmark={props.change}
        />
      </td>
      <td>
        <button
          onClick={() => props.delete(props.id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
