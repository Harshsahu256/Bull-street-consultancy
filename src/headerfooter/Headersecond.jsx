import React, { useEffect, useState } from "react";
import query from "jquery";
import { Link, NavLink } from "react-router-dom";
import "../styles/Headertwo.css";

const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = query(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);


  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className="overlay" />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
    
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type="button"
          className="close-button"
        >
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link to="/" className="mobile-menu__logo">
            <img src="assets/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              {/* Home Menu */}
                <li className="nav-menu__item">
                <Link
                  to="/"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                 Home
                </Link>
              </li>
          
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 0 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Product
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 0 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="#"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      SBlot
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="#"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                     SSeagun
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="#"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                     Smak
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="#"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                     Vatsal250
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="#"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                     SFlash250
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="#"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                     Sx300E
                    </Link>
                  </li>
                </ul>
              </li> 
             {/* about */}
            
             <li className="nav-menu__item">
                <Link
                  to="/about"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                  About
                </Link>
              </li>     

              {/* Pages Menu */}
              <li
                onClick={() => handleMenuClick(2)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 2 ? "d-block" : ""
                }`}
              >
                
                <Link to="#" className="nav-menu__link">
                  Dealer
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 2 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/find-dealer"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Find Dealer
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/become-dealer"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Become A Dealer{" "}
                    </Link>
                  </li>
                 
                </ul>
              </li>

              {/* media Menu */}
              <li
                onClick={() => handleMenuClick(3)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 3 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Media
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 3 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/news"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      News
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/videos"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                     Videos
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-menu__item">
                <Link
                  to="/career"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                  Careers
                </Link>
              </li>     
              <li className="nav-menu__item">
                <Link
                  to="/refer-earn"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                Happy Clients
                </Link>
              </li>  
               <li className="nav-menu__item">
                <Link
                  to="/refer-earn"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                Refer & Earn
                </Link>
              </li>
              {/* Contact Us Menu */}
              <li className="nav-menu__item">
                <Link
                  to="/contact"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Top Start ========================= */}
      <div className="header-top bg-main-600 flex-between">
        <div className="container container-lg">
          <div className="flex-between flex-wrap gap-8">
            <ul className="flex-align flex-wrap d-none d-md-flex">
              <li className="border-right-item">
                <Link
                  to="#"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  admin@seekamotors.com
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  to="#"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  +91 7410770201
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  to="#"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  +91 7756806400
                </Link>
              </li>
             
            </ul>
            <ul className="header-top__right flex-align flex-wrap">
              
              <li className="border-right-item">
                <Link
                  to="/account"
                  className="text-white text-sm py-8 flex-align gap-6"
                >
                  <span className="icon text-md d-flex">
                    {" "}
                    <i className="ph ph-user-circle" />{" "}
                  </span>
                  <span className="hover-text-decoration-underline">
                    Download Brochure
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ======================= Middle Top End ========================= */}
      {/* ==================== Header Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className="container container-lg">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="flex-align menu-category-wrapper">
              {/* Category Dropdown Start */}
              <div className="category on-hover-item">
                <div className="logo">
                  <Link to="/" className="link">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className="header-menu d-lg-block d-none">
                {/* Nav Menu Start */}
                <ul className="nav-menu flex-align ">
                <li className="nav-menu__item">
                    <NavLink
                      to="/"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                     Home
                    </NavLink>
                  </li>  

                  <li className="on-hover-item nav-menu__item has-submenu">
                    <Link to="#" className="nav-menu__link">
                      All Products
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          SBolt
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/blog-details"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          SSeagun
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Smak
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Vatsal250
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          SFlash250
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Sx300E
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-menu__item">
                    <NavLink
                      to="/about"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      About
                    </NavLink>
                  </li> 
                  {/* dealer */}
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <Link to="#" className="nav-menu__link">
                   Dealer
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/become-dealer"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Become a Dealer
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/find-dealer"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Find Dealer
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                              {/* Media */}
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <Link to="#" className="nav-menu__link">
                   Media
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/news"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}News 
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/videos"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Videos
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="nav-menu__item">
                    <NavLink
                      to="/career"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Career
                    </NavLink>
                  </li>
     <li className="nav-menu__item">
                    <NavLink
                      to="/happy-clients"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Happy Clients
                    </NavLink>
                  </li>
                  <li className="nav-menu__item">
                    <NavLink
                      to="/refer-earn"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                   Refer & Earn
                    </NavLink>
                  </li>
                  
                  <li className="nav-menu__item">
                    <NavLink
                      to="/contact"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className="header-right flex-align">
              <Link
                to="/book-test-drive"
                className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
              >
                <div className="d-flex text-32">
                  <i className="ph ph-phone-call" />
                </div>
              Book A Text Drive
              </Link>
              <button
                onClick={handleMenuToggle}
                type="button"
                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
              >
                {" "}
                <i className="ph ph-list" />{" "}
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderOne;