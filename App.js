import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Header from "./Header";
import StudentCard from "./StudentCard";

function Portal() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "white" : "#1e293b",
    color: theme === "light" ? "black" : "white",
    height: "100vh",
    padding: "20px",
    transition: "0.3s"
  };

  return (
    <div style={style}>
      <h1>KL Student Portal</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <Header />
      <StudentCard />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portal />
    </ThemeProvider>
  );
}
