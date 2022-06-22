import { Image } from "react-bootstrap";
import Logo from "../assets/images/Rectangle 127.png";

function Navbar(props) {
  const { judul } = props;
  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body rounded">
      <div className="container">
        <a className="navbar-brand" id="logo"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <a aria-current="page" id="title">
            {judul}
          </a>
        </button>
        <div className="collapse navbar-collapse col-8">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a aria-current="page" id="title">
              {judul}
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
