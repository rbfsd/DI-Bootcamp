import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemedComponent = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#333333" : "#ffffff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Themed Component</h2>
      <p>This component applies styles based on the current theme.</p>
    </div>
  );
};

export default ThemedComponent;
