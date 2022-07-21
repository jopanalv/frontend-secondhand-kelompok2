import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Rectangle 127.png";

function Navbar2(props) {
  const { judul } = props;
  return (
    <nav className="navbar-judul navbar-expand-lg shadow-sm p-3 mb-5 bg-body rounded">
      <div className="container">
        <a
          className="navbar-brand col-4"
          id="logo"
          style={{ paddingLeft: "100px" }}
          href="/"
        >
          <Link to="/">
            <Image src={Logo} />
          </Link>
        </a>
        <div className="navbar-nav col-8">
          <p aria-current="page" id="title">
            {judul}
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
