import Logo from "../../assets/img/logo.png";
import SearchInput from "../SearchInput";
import "./style.css";

const Header = () => {
  return (
    <nav class="navbar sticky-top">
      <div class="container-fluid">
        <div class="navbar-brand">
          <img src={Logo} className="nav-logo" />
        </div>
        <div class="d-flex">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
};

export default Header;
