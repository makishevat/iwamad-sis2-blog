import { NavLink } from "react-router";
type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {

  return (
    <header>
      <div className="brand">
        <h1>{title}</h1>
      </div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}