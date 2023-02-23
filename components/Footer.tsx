import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);

  console.log(activeTheme);

  return (
    <div className="bottom">
      <div className="bottom-text">
        Prefer {activeTheme === "dark" ? "light" : "dark"} mode? Just flip the
        toggle!
      </div>
      <ThemeToggle activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
    </div>
  );
}
