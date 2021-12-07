import React from "react";

const Like = ({ liked, likeToggle }) => {
  let likeState = "fa fa-heart";
  if (!liked === true) likeState += "-o";
  return (
    <i
      className={likeState}
      onClick={likeToggle}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
