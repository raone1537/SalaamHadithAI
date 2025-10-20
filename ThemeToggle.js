import React, { useState } from "react";

export default function ThemeToggle() {
  const themes = ["gold-theme", "night-theme", "classic-theme"];
  const [theme, setTheme] = useState(0);

  const toggleTheme = () => {
    document.body.classList.remove(...themes);
    const next = (theme + 1) % themes.length;
    document.body.classList.add(themes[next]);
    setTheme(next);
  };

  return <button onClick={toggleTheme}>Switch Theme</button>;
}
