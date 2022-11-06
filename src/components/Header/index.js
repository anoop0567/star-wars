import Logo from "../../assets/img/logo.png";
import SearchButton from "../SearchButton";
import SocialMedia from "../SocialMedia";
import "./style.css";

const Header = () => {
  return (
    <nav className="navbar sticky-top">
      <div className="container">
        <div className="social-container">
          <SocialMedia />
        </div>
        <div className="navbar-brand m-0 p-0">
          <img src={Logo} className="nav-logo" />
        </div>
        <div className="action-container">
          <SearchButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
