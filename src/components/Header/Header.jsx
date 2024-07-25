import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.css";
import AuthActions from "../AuthActions/AuthActions";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div style={{ fontSize: "14px", flexGrow: "1", flexBasis: "0" }} className="logo">
          One of Two.
        </div>
        <HeaderNav />
        <AuthActions />
      </div>
    </header>
  );
}
