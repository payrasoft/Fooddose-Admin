import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import axios from "axios";
import Cookies from "universal-cookie";

const AddMerchants = (props) => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logo, setLogo] = useState(null);
  const cookies = new Cookies();
  const [toast, setToast] = useState(false);
  const [errors, setErrors] = useState({});

  const handleToast = () => {
    setToast(false);
  };

  const handleFileInput = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === "name") {
      setName(e.target.value);
    }
    if (fieldName === "shopName") {
      setShopName(e.target.value);
    }
    if (fieldName === "email") {
      setEmail(e.target.value);
    }
    if (fieldName === "number") {
      setNumber(e.target.value);
    }
    if (fieldName === "password") {
      setPassword(e.target.value);
    }
    if (fieldName === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", name);
    data.append("shopName", shopName);
    data.append("email", email);
    data.append("number", number);
    data.append("password", password);
    data.append("confirmPassword", confirmPassword);
    data.append("link", "");
    data.append("logo", logo);

    setTimeout(() => {
      setToast(false);
    }, 5000);

    fetch(" http://localhost:5000/user/register", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((success) => {
        console.log(success);
        if (success.accesstoken) {
          cookies.set("user-token", success.accesstoken, { path: "/" });
          setToast(true);
          setName("");
          setEmail("");
          setNumber("");
          setShopName("");
          setPassword("");
          setConfirmPassword("");
          setLogo(null);
          setErrors({});
        }
        if (success.errors) {
          const error = success.errors;
          setErrors({ ...error });
        }
      });
  };

  return (
    <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div
            style={{ backgroundColor: "rgb(255, 90, 0, .6)" }}
            className="d-flex justify-content-between top-content align-items-center p-2"
          >
            <h3 style={{ color: "#640000" }}>Add Merchants</h3>{" "}
            <button className="btn btn-success">
              <Link to="/all-merchants">All Merchant</Link>
            </button>
          </div>
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{ position: "relative" }}
          >
            <div
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              class={`toast ${toast && "show"}`}
              style={{ position: "absolute", top: "0", right: "0" }}
            >
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                class="toast-body bg-success text-white d-flex justify-between"
              >
                <h6 style={{ marginBottom: "0px" }}>Registered Successfully</h6>
                <span
                  onClick={handleToast}
                  className="close"
                  style={{ fontSize: "28px", cursor: "pointer" }}
                  data-dismiss="toast"
                  aria-label="Close"
                  aria-hidden="true"
                >
                  &times;
                </span>
              </div>
            </div>
          </div>
          <div className="card-body border rounded">
            <form
              ref={form}
              onSubmit={submit}
              className="add-merchant"
              encType="multipart/form-data"
            >
              <h4 className="text-success mt-2 mb-3">
                Merchant <span style={{ color: "#640000" }}>Information</span>
              </h4>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="mName">Merchant Name</label>
                  <input
                    onChange={handleChange}
                    value={name}
                    className="form-control"
                    type="text"
                    name="name"
                    id="mName"
                    placeholder="Merchant Name"
                  />
                  <div style={{ color: "red" }}>
                    {errors.name && errors.name.msg}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="shopName">Shop Name</label>
                  <input
                    onChange={handleChange}
                    value={shopName}
                    className="form-control"
                    type="text"
                    name="shopName"
                    id="ahopName"
                    placeholder="Shop Name"
                  />
                  <div style={{ color: "red" }}>
                    {errors.shopName && errors.shopName.msg}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleChange}
                    value={email}
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <div style={{ color: "red" }}>
                    {errors.email && errors.email.msg}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="number">Number</label>
                  <input
                    onChange={handleChange}
                    value={number}
                    className="form-control"
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Number"
                  />
                  <div style={{ color: "red" }}>
                    {errors.number && errors.number.msg}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={handleChange}
                    value={password}
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <div style={{ color: "red" }}>
                    {errors.password && errors.password.msg}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    onChange={handleChange}
                    value={confirmPassword}
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <div style={{ color: "red" }}>
                    {errors.confirmPassword && errors.confirmPassword.msg}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="logo">Upload Logo</label>
                  <input
                    onChange={handleFileInput}
                    className="form-control"
                    type="file"
                    name="logo"
                    id="logo"
                    placeholder="Logo"
                  />
                  <div style={{ color: "red" }}>
                    {errors.logo && errors.logo.msg}
                  </div>
                </div>
              </div>
              <button className="btn btn-success mt-2 common-color">Add</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddMerchants;
