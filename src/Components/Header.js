import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/*      <!-- top navigation bar --> */}
      <nav className="navbar navbar-expand-lg navbar-light py-3   navStyle fixed-top sticky">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#sidebar"
            ></span>
          </button>
          <Link
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            to="/"
          >
            <img
              width="200"
              src="https://payrasoft.com/wp-content/uploads/2021/12/payrasoft-vertical-logo-1024x128.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
            <form className="d-flex ms-auto my-3 my-lg-0">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle ms-2"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill"></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  <!-- top navigation bar -->





                <!-- offcanvas --> */}
      <div
        className="offcanvas offcanvas-start offcanv mt-3 sidebar-nav bg-light"
        tabIndex="-1"
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-light">
            <ul className="navbar-nav">
              <li>
                <Link to="/" className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="fas fa-home"></i>
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  to="#merchants"
                >
                  <span className="me-2">
                    <i className="fa fa-balance-scale"></i>
                  </span>
                  <span>Merchants</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </Link>
                <div className="collapse" id="merchants">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/all-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>All Merchants</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pending-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Pending Merchants</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/rejected-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Rjected Merchants</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

           

              {/* Order */}

              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#order"
                >
                  <span className="me-2">
                    <i className="fab fa-jedi-order"></i>
                  </span>
                  <span>Order</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="order">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/all-order" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>All Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pending-order" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Pending Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/rejected-order" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Rejected Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/progress-order" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Progress Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/returning-order" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Returning Order</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Rider */}

              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#rider"
                >
                  <span className="me-2">
                    <i className="fas fa-biking"></i>
                  </span>
                  <span>Rider</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="rider">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/all-rider" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>All Rider</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pending-rider" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Pending Rider</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/rejected-rider" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Rejected Rider</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Accounts */}

              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#accounts"
                >
                  <span className="me-2">
                    <i className="fas fa-user-circle"></i>
                  </span>
                  <span>Accounts</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="accounts">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/income" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Income</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/expense" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Expense</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/paid-invoice" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Paid Invoice</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/unpaid-invoice" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>UNPAID Invoice</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/make-salary" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Make Salary</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Delivery Area */}

              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#delivery"
                >
                  <span className="me-2">
                    <i className="fas fa-caravan"></i>
                  </span>
                  <span>Delivery Area</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="delivery">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/add-area" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Add Area</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/manage-area" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Manage Area</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

                {/* notice board  */}


              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#notice"
                >
                  <span className="me-2">
                    <i className="far fa-clipboard"></i>
                  </span>
                  <span>Notice Borad</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="notice">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/add-notice" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Add Notice</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/all-notice" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>All Notice</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#users"
                >
                  <span className="me-2">
                    <i className="fas fa-users"></i>
                  </span>
                  <span>Users</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="users">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/all-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Add Users</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/add-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>All Users</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Settings */}

              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#Settings"
                >
                  <span className="me-2">
                    <i className="fas fa-cog"></i>
                  </span>
                  <span>Settings</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="Settings">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to="/all-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>General Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/add-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>Website Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pending-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>SEO</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/rejected-merchants" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-list-ul"></i>
                        </span>
                        <span>All Pages</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
