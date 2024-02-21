import React from "react";
import "./badge.css";
const getColor = (status) => {
  switch (status) {
    case "proccessing":
      return "primary";

    case "cancled":
      return "danger";

    case "delivered":
      return "success";
    default:
      return "";
  }
};
const Badge = ({ title, color }) => {
  return <div className={`custome-badge ${getColor(color)}`}>{title}</div>;
};

export default Badge;
