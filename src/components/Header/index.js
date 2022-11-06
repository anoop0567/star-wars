import Logo from "../../assets/img/logo.png";
import SearchInput from "../SearchInput";
import SocialMedia from "../SocialMedia";
import "./style.css";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <nav className="navbar sticky-top">
      <div className="container">
        <div className="social-container">
          <SocialMedia />
        </div>
        <div className="navbar-brand m-0 p-0">
          <img src={Logo} className="nav-logo" alt="logo" />
        </div>
        <div className="action-container">
          <SearchInput
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
