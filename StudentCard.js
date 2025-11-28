import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function StudentCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: theme === "light" ? "#9ca3af" : "#475569",
        backgroundColor: theme === "light" ? "#f9fafb" : "#020617"
      }}
    >
      <h3>Student Details</h3>
      <p>Name: Hari</p>
      <p>Course: B.Tech CSE</p>
    </div>
  );
}
