import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const AddMerchants = (props) => {


  const merchant = useState(props.merchant)
  const form = useRef(null)


  const submit = e => {
    e.preventDefault()
    const data = new FormData(form.current)
    fetch('http://127.0.0.1:8000/api/merchant', { method: 'POST', body: data})
      .then(res => res.json())
      .then(json => console.log(json.merchant))
  }

  return (
    <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>Add Merchants</h4>{" "}
            <button className="btn btn-success mb-2">
              <Link to="/all-merchants">All Merchant</Link>
            </button>
          </div>
          <div className="card-body border rounded">
            <form ref={form} onSubmit={submit} className="add-merchant">
              <h5 className="text-success mt-2">Merchant Information</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="m-name">Merchant Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="m-name"
                    placeholder="Merchant Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="m-email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="m-email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="mobile"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="address">Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="address"
                    placeholder="Address"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="status">Status</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="status"
                    placeholder="Status"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name=""
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <h5 className="text-success mt-3">
                Merchant Additional Information
              </h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="b-name">Business Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="b-name"
                    placeholder="Business Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="bkash">Bkash Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="bkash"
                    placeholder="Bkash Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="rocket">Rocet Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="rocket"
                    placeholder="Rocet Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="nagad">Nagad Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="nagad"
                    placeholder="Nagad Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="bank-name">Bank Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="bank-name"
                    placeholder="Bank Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="a-number">Account Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="a-number"
                    placeholder="Account Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="a-name">Account Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="a-name"
                    placeholder="Account Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="p-method">Payment Method</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="p-method"
                    placeholder="Payment Method"
                  />
                </div>
              </div>

              <h5 className="text-success mt-3">Restaurant Information</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="r-name">Restaurant Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="r-name"
                    placeholder="Restaurant Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="r-code">Restaurant Code</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="r-code"
                    placeholder="Restaurant Code"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="r-address">Restaurant Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="r-address"
                    placeholder="Restaurant Address"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="t-number">Tin Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="t-number"
                    placeholder="Tin Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="since">Since</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="since"
                    placeholder="Since"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="r-status">Status</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="r-status"
                    placeholder="Status"
                  />
                </div>
              </div>

              <h5 className="text-success mt-3">Schedule Information</h5>
              <div className="days d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name="" id="Saturday" />
                  <label className="" htmlFor="Saturday">
                    Saturday
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name="" id="Sunday" />
                  <label className="" htmlFor="Sunday">
                    Sunday
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name="" id="Monday" />
                  <label className="" htmlFor="Monday">
                    Monday
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name="" id="Tuesday" />
                  <label className="" htmlFor="Tuesday">
                    Tuesday
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name="" id="Wednesday" />
                  <label className="" htmlFor="Wednesday">
                    Wednesday
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name="" id="Thursday" />
                  <label className="" htmlFor="Thursday">
                    Thursday
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name="" id="Friday" />
                  <label className="" htmlFor="Friday">
                    Friday
                  </label>
                </div>
              </div>
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-m-6">
                      <label htmlFor="s-open">Shop Open</label>
                      <input className="form-control" type="time" name="" id="s-open" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-m-6">
                      <label htmlFor="s-close">Shop Close</label>
                      <input className="form-control" type="time" name="" id="s-close" />
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
