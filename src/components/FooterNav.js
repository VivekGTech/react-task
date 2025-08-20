import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function FooterNav() {
  const location = useLocation();
  const pages = ["/", "/login", "/signup", "/account"];
  const currentPage = pages.indexOf(location.pathname) + 1;

  return (
    <div
      className="footer-nav d-flex align-items-center justify-content-between"
    >
      {/* Home */}
      <Link to="/" className="footer-icon">
        <FaHome size={20} />
      </Link>

      {/* Page counter */}
      <div className="footer-pages">
        <Link
          to={pages[currentPage - 2] || pages[0]}
          className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
        >
          &lt;
        </Link>
        <span className="page-count">
          {currentPage} of {pages.length}
        </span>
        <Link
          to={pages[currentPage] || pages[pages.length - 1]}
          className={`arrow ${currentPage === pages.length ? "disabled" : ""}`}
        >
          &gt;
        </Link>
      </div>
    </div>
  );
}

export default FooterNav;
