import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const data = [
  {
    name: "Burger",
    image:
      "data:image/jpeg;base64,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",
    price: "Burger",
  },
];

const AddExtraItem = () => {
  return (
    <div>
      <Header />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Extra Item</h4>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <p>Add Extra Item</p>
              <form className="mt-4">
                <label htmlFor="name">Item Name</label>
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id="name"
                  placeholder="Enter Item Name"
                />
                <label htmlFor="image">Image</label>
                <input
                  className="form-control"
                  type="file"
                  name=""
                  id="image"
                />
                <label htmlFor="price">Item Price</label>
                <input
                  className="form-control"
                  type="number"
                  name=""
                  id="price"
                  placeholder="Enter Item Price"
                />

                <button className="btn common-color mt-2">
                  Add Extra Item
                </button>
              </form>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="example"
                          className="table table-bordered data-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Image</th>
                              <th>Price</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((d) => (
                              <tr key={d.name}>
                                <td>{d.name}</td>
                                <td>
                                  <img src={d.image} alt="" width="50" />
                                </td>
                                <td>{d.price}</td>
                                <td className="d-flex align-items-center">
                                  <Link to="/edit-extra-item">
                                    <i
                                      className="fas fa-edit me-2"
                                      style={{ color: "#660000" }}
                                    ></i>
                                  </Link>
                                  <i className="fas fa-trash text-danger"></i>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddExtraItem;
