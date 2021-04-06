import logo from "../assets/img/Deliveroo_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="Deliveroo's logo" />
      </div>
    </div>
  );
};

export default Header;
