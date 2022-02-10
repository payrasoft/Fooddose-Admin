import React from "react";
import Header from "../../Header";
import Select from "react-select";
import { Link } from "react-router-dom";

const data = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const AddFood = () => {
  return (
    <div>
      <Header />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Add New Food</h4>
          <div className="card">
            <form className="p-3">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <label htmlFor="i-name">Item Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="i-name"
                    placeholder="Enter Item Name"
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <label htmlFor="c-name">Category Name</label>
                  <select className="form-control" name="" id="">
                    <option value="1">Choose One</option>
                    <option value="2">Burger</option>
                    <option value="3">Pizza</option>
                    <option value="4">Sandwice</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="quantity"
                    placeholder="Enter Quantity"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label htmlFor="price">Price</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="price"
                    placeholder="Enter Price"
                  />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label htmlFor="d-time">Delivery Time</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Dollar amount (with dot and two decimal places)"
                      placeholder="Enter Delivery Time"
                    />
                    <span className="input-group-text">0.00</span>
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="extra">Extra</label>
                <Select
                  isMulti
                  id="extra"
                  name="colors"
                  options={data}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
                <Link to="/add-extra-item">Add Extra Item</Link>
              </div>

              <div className="">
                <input className="me-2" type="checkbox" name="" id="discount" />
                <label htmlFor="discount">Discount</label>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label htmlFor="d-type">Dicount Type</label>
                    <select className="form-control" name="" id="d-type">
                      <option value="0">Choose One</option>
                      <option value="1">Fixed</option>
                      <option value="2">Percentage</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label htmlFor="d-price">Dicount Price</label>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id="d-price"
                      placeholder="00"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <label htmlFor="extra">Extra</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="extra"
                    placeholder="Enter Item Name"
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <label htmlFor="image">Image</label>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id="image"
                  />
                </div>
              </div>

              <label htmlFor="s-desc">Short Description</label>
              <input
                className="form-control"
                type="text"
                name=""
                id="s-desc"
                placeholder="Short Description"
              />

              <label htmlFor="l-desc">Long Description</label>
              <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Long Description"
              ></textarea>

              <button className="btn btn-success mt-3">Add</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddFood;
