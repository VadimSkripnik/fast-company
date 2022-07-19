import React from "react";

const Bookmark = (props) => {
  return (
    <div>
      <span
        className="btn btn-outline-dark"
        onClick={() => props.onChangeBookmark(props.uniqueId)}
      >
        <i
          className={
            "bi " + (!props.toggleBookmark ? "bi-bookmark" : "bi-bookmark-fill")
          }
        ></i>
      </span>
    </div>
  );
};

export default Bookmark;
