import React from "react";
import avatar from "../../../assets/default-avatar.svg";
export function Person(props) {
  const { name, nickName = "none", images } = props;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{nickName}</h3>
      <img src={img} alt={name} style={{ width: "50px" }} />
    </div>
  );
}
