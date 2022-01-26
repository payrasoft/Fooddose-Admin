import React from "react";
import Header from "./Header";

const Edit = () => {
  return (
    <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          {/* <div className="d-flex justify-content-between top-content">
            <h4>Expense Page Section</h4>{" "}
            <button className="btn btn-success mb-2"><Link to="/add-merchants">Add Expense Page</Link></button>
            
          </div> */}
          <div className="card-body  ">
            {/* <div className="d-flex justify-content-between table-top">
              <input
                className="form-control mb-3"
                style={{ width: "30%" }}
                type="text"
                name=""
                id=""
                placeholder="Search"
              />

              <div
                className="btn-group mb-3"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-success">
                  Copy
                </button>
                <button type="button" class="btn btn-success">
                  CSV
                </button>
                <button type="button" class="btn btn-success">
                  Excel
                </button>
                <button type="button" class="btn btn-success">
                  PDF
                </button>
                <button type="button" class="btn btn-success">
                  Print
                </button>
              </div>
            </div> */}
            <div class="row g-2">
            <h4>Edit Page</h4>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="Billal"
                  />
                  <label for="floatingInputGrid">Customer Name</label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="hotel seraton"
                  />
                  <label for="floatingInputGrid">Restaurant name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="+01836288648"
                  />
                  <label for="floatingInputGrid">Contact No</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="Uttara"
                  />
                  <label for="floatingInputGrid">Delivery Location</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-25 fw-bold"> Update</button>
              
            </div>

            {/* <div class="row g-3 align-items-center">
              <div class="col-md-6">
                <label for="inputPassword6" class="col-form-label">
                  name
                </label>
                <input
                  type="text"
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  value="billal"
                />
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Edit;
