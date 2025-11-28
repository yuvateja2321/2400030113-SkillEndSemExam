import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <h2
      style={{
        backgroundColor: theme === "light" ? "#e5e7eb" : "#0f172a",
        padding: "10px",
        borderRadius: "8px",
        marginTop: "20px"
      }}
    >
      Welcome to College Portal
    </h2>
  );
}
