import React, { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/atoms/heading/index";
import Text from "./components/atoms/text/index";

function App() {
  const userPrefersTheme = (theme) =>
    window.matchMedia &&
    window.matchMedia(`(prefers-color-scheme: ${theme}`).matches;

    const changeToTheme = (theme) => {
      const htmlElement = document.querySelector("html");
      const reverseTheme = theme === "dark" ? "light" : "dark";

      htmlElement.classList.add(`${theme}-theme`);
      htmlElement.classList.remove(`${reverseTheme}-theme`);

    }
    const verifyThemesClass = (theme) => {
      const htmlElement = document.querySelector("html");
      return htmlElement.classList.contains(`${theme}-theme`);
    }

  const toggleTheme = () => {
    if (verifyThemesClass("dark")) return changeToTheme("light");
    if (verifyThemesClass("light")) return changeToTheme("dark");
    if (userPrefersTheme("dark")) return changeToTheme("light");
    if (userPrefersTheme("light")) return changeToTheme("dark");
  };

  
  return (
    <div className="App">
      <Heading element="h1" weight="bold">
        Heading H1
      </Heading>
      <Heading element="h2" weight="bold">
        Heading H2
      </Heading>
      <Heading element="h3" weight="bold">
        Heading H3
      </Heading>
      <Heading element="h4" weight="bold">
        Heading H4
      </Heading>
      <Heading element="h5" weight="bold">
        Heading H5
      </Heading>
      <Heading element="h6" weight="bold">
        Heading H6
      </Heading>
      <Text weight="bold" size="xl">
        Text XL
      </Text>
      <Text weight="bold" size="lg">
        Text LG
      </Text>
      <Text weight="bold" size="base">
        Text BASE
      </Text>
      <Text size="sm">Text SM</Text>
      <Text size="xs">Text XS</Text>
      <button onClick={toggleTheme}>Change themes</button>
    </div>
  );
}

export default App;
