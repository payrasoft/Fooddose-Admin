import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const AddMerchants = (props) => {
  const form = useRef(null);

  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopLogo, setShopLogo] = useState(null);
  const [shopAddress, setShopAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("true");

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "name") {
      setName(event.target.value);
    }
    if (name === "shopName") {
      setShopName(event.target.value);
    }
    if (name === "shopAddress") {
      setShopAddress(event.target.value);
    }
    if (name === "email") {
      setEmail(event.target.value);
    }
    if (name === "phone") {
      setPhone(event.target.value);
    }
    if (name === "website") {
      setWebsite(event.target.value);
    }
    if (name === "password") {
      setPassword(event.target.value);
    }
    if (name === "confirmPassword") {
      setConfirmPassword(event.target.value);
    }
  };

  const handleFileInput = (event) => {
    setShopLogo(event.target.files[0]);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);

    data.append("name", name);
    data.append("shopName", shopName);
    data.append("shopLogo", shopLogo);
    data.append("shopAddress", shopAddress);
    data.append("email", email);
    data.append("phone", phone);
    data.append("website", website);
    data.append("password", password);
    data.append("confirmPassword", confirmPassword);
    data.append("marchent", status);

    console.log(data.get("shopLogo"));

    fetch("http://127.0.0.1:8000/api/merchant", { method: "POST", body: data })
      .then((res) => res.json())
      .then((json) => console.log(json.merchant));
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
          <div className="card-body border rounded">
            <form ref={form} onSubmit={submit} className="add-merchant">
              <h4 className="text-success mt-2 mb-3">
                Merchant <span style={{ color: "#640000" }}>Information</span>
              </h4>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="mName">Merchant Name</label>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="name"
                    id="mName"
                    value={name}
                    placeholder="Merchant Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="shopName">Shop Name</label>
                  <input
                    onChange={handleChange}
                    value={shopName}
                    className="form-control"
                    type="text"
                    name="shopName"
                    id="shopName"
                    placeholder="shop Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="shopLogo">Shop Logo</label>
                  <input
                    onChange={handleFileInput}
                    className="form-control"
                    type="file"
                    name="shopLogo"
                    id="shopLogo"
                    placeholder="Shop logo"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="shopAddress">Shop Address</label>
                  <input
                    onChange={handleChange}
                    value={shopAddress}
                    className="form-control"
                    type="text"
                    name="shopAddress"
                    id="shopAddress"
                    placeholder="Shop address"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="m-email">Email</label>
                  <input
                    onChange={handleChange}
                    value={email}
                    className="form-control"
                    type="email"
                    name="email"
                    id="m-email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    onChange={handleChange}
                    value={phone}
                    className="form-control"
                    type="text"
                    name="phone"
                    id="mobile"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="website">Website</label>
                  <input
                    onChange={handleChange}
                    value={website}
                    className="form-control"
                    type="text"
                    name="website"
                    id="website"
                    placeholder="Website"
                  />
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
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  {/* <label htmlFor="status">Status</label> */}
                  <input
                    hidden
                    value={"true"}
                    className="form-control"
                    type="text"
                    name="status"
                    id="status"
                    placeholder="Status"
                  />
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
