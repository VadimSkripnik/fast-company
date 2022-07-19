import React from "react";

const SearchStatus = (props) => {
  return (
    <h2 className="m-2">
      <span
        className={
          "badge " + (props.users.length > 0 ? "bg-primary" : "bg-danger")
        }
      >
        {props.users.length > 0
          ? `${
              props.users.length +
              " " +
              props.onRenderPhrase(props.users.length)
            } с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
