import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo (2).png";
import "../../styles/header.css";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const MainHeader = () => {
  const navbarCollapseRef = useRef(null);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  // Close the menu on link click
  const handleCloseMenu = () => {
    if (
      navbarCollapseRef.current &&
      navbarCollapseRef.current.classList.contains("show")
    ) {
      navbarCollapseRef.current.classList.remove("show");
    }
    setSidebarOpen(false);
  };

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  // Toggle dropdown for desktop
  const toggleDropdownOpen = () => {
    setDropdownOpen(true);
  };
  const toggleDropdownClose = () => {
    setDropdownOpen(false);
  };
  React.useEffect(() => {
    handleCloseMenu();
  }, [location]);

  function toggleProductsDropdown() {
    console.log(productsDropdownOpen);
    setProductsDropdownOpen((prev) => !prev);
    console.log(productsDropdownOpen);
  }
  return (
    <>
      {/* Desktop Header */}
      <div className="container-fluid">
        {/* //</>style={{backgroundColor: "rgba(0, 0, 0, 0.7)" }}> */}
        <nav className="navbar navbar-expand-lg  sticky-md-top d-none d-lg-block ">
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={handleCloseMenu}>
              <img src={logo} alt="Logo" height="70px" width="200px" />
            </Link>

            {/* Collapsible Navbar Content */}
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
              ref={navbarCollapseRef}
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <Link
                    className="nav-link  fw-semibold   "
                    to="/"
                    onClick={handleCloseMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold  "
                    to="/about"
                    onClick={handleCloseMenu}
                  >
                    About Us
                  </Link>
                </li>

                <li
                  className="nav-item dropdown "
                  onMouseLeave={toggleDropdownClose}
                >
                  <Link
                    className="nav-link dropdown-toggle fw-semibold "
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    // onClick={toggleDropdown}
                    onMouseEnter={toggleDropdownOpen}
                  >
                    Products
                  </Link>
                  <div
                    className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item " to="/products/equity">
                      Equity
                    </Link>{" "}
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item"
                      to="/products/currency-derivatives"
                    >
                      Currency Derivatives
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item"
                      to="/products/equity-derivatives"
                    >
                      Equity Derivatives
                    </Link>{" "}
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/products/ipo">
                      IPO
                    </Link>{" "}
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/products/mutual-funds">
                      Mutual Funds
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold  "
                    to="/package"
                    onClick={handleCloseMenu}
                  >
                    Packages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold  "
                    to="/bank-detail"
                    onClick={handleCloseMenu}
                  >
                    Bank Detail
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold  "
                    to="/research"
                    onClick={handleCloseMenu}
                  >
                    Research
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold  "
                    to="/contact"
                    onClick={handleCloseMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* WhatsApp Button */}
              <div className="d-flex justify-content-center mt-2 mt-lg-0">
                <a
                  className="btn btn-outline-danger mx-1"
                  href="https://wa.link/nm5r3a"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="btn btn-outline-danger mx-1"
                  href="https://x.com/Consultanc41711?t=_O7-YXrz9Jj_Nadzfoy1oQ&s=08"
                >  <FaTwitter />
                 
                </a>
                <a
                  className="btn btn-outline-danger mx-1"
                  href="https://www.instagram.com/bullstreetconsultancy?igsh=eXRldHB2ejJkZHBy"
                >
                  <FaInstagram />
                </a>
                <a
                  className="btn btn-outline-danger mx-1"
                  href="https://t.me/BULLSTREET_CONSULTANCY"
                >
                 <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Header with Sidebar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-md-top d-lg-none">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={handleCloseMenu}>
            <img src={logo} alt="Logo" height="70px" width="200px" />
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler btnstyle"
            type="button"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-nav">
          <li className="nav-item my-0">
            <Link
              className="nav-link mt-5"
              to="/"
              onClick={() => {
                handleCloseMenu();
                toggleSidebar();
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item  my-0">
            <Link
              className="nav-link"
              to="/about"
              onClick={() => {
                handleCloseMenu();
                toggleSidebar();
              }}
            >
              About Us
            </Link>
          </li>

          <li className="nav-item  my-0">
            <span
              className="nav-link"
              onClick={toggleProductsDropdown}
              style={{ cursor: "pointer" }}
            >
              Products{" "}
              {productsDropdownOpen ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </span>
            {productsDropdownOpen && (
              <ul className="sidebar-submenu ps-0">
                <ul className="sidebar-submenu " style={{listStyle:"none"}}>
                  <li>
                    <Link
                      className="nav-link"
                      to="/products/equity"
                      onClick={() => {
                        toggleProductsDropdown();
                        handleCloseMenu();
                      }}
                    >
                      Equity
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/products/currency-derivatives"
                      onClick={() => {
                        toggleProductsDropdown();
                        handleCloseMenu();
                      }}
                    >
                      Currency Derivatives
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link  my-0"
                      to="/products/equity-derivatives"
                      onClick={() => {
                        toggleProductsDropdown();
                        handleCloseMenu();
                      }}
                    >
                      Equity Derivatives
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link  my-0"
                      to="/products/ipo"
                      onClick={() => {
                        toggleProductsDropdown();
                        handleCloseMenu();
                      }}
                    >
                      IPO
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link  my-0"
                      to="/products/mutual-funds"
                      onClick={() => {
                        toggleProductsDropdown();
                        handleCloseMenu();
                      }}
                    >
                      Mutual Funds
                    </Link>
                  </li>
                  {/* Repeat for other links */}
                </ul>
              </ul>
            )}
          </li>

          <li className="nav-item  my-0">
            <Link
              className="nav-link"
              to="/package"
              onClick={() => {
                handleCloseMenu();
                toggleSidebar();
              }}
            >
              Packages
            </Link>
          </li>
          <li className="nav-item  my-0">
            <Link
              className="nav-link"
              to="/bank-detail"
              onClick={() => {
                handleCloseMenu();
                toggleSidebar();
              }}
            >
              Bank Detail
            </Link>
          </li>
          <li className="nav-item  my-0">
            <Link
              className="nav-link"
              to="/research"
              onClick={() => {
                handleCloseMenu();
                toggleSidebar();
              }}
            >
              Research
            </Link>
          </li>

          <li className="nav-item  my-0">
            <Link
              className="nav-link"
              to="/contact"
              onClick={() => {
                handleCloseMenu();
                toggleSidebar();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainHeader;
