import React from "react";
import ThemedComponent from "./ThemedComponent";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeProvider";

const App = () => {
  return (
    // Wrap your entire application with ThemeProvider
    <ThemeProvider>
      <div>
        <h1>My Themed App</h1>
        {/* Example of consuming themed components */}
        <ThemedComponent />
        {/* Example of the theme switcher component */}
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
