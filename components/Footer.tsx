import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});
export default function Footer() {
  return (
    <div className="bottom">
      <div className="bottom-text">Prefer dark mode? Just flip the toggle!</div>
      <ThemeToggle />
    </div>
  );
}
