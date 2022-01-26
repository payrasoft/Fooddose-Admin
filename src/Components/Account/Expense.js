import React from 'react';
import Header from './../Header';
import { Link } from 'react-router-dom';

const Expense = () => {
    return (
        <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
        <div className="d-flex justify-content-between top-content">
            <h4>Expense Page Section</h4>{" "}
            
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Income Page
            </button>
            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="row g-2">
                      <h4>Edit Page</h4>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInputGrid"
                            placeholder="income"
                            
                          />
                          <label for="floatingInputGrid">Income</label>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInputGrid"
                            placeholder="Vendor name"
                            
                          />
                          <label for="floatingInputGrid">Vendor</label>
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
                          <label for="floatingInputGrid">Amount</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInputGrid"
                            placeholder="name@example.com"
                            value="Uttara"
                          />
                          <label for="floatingInputGrid">
                            Income Date
                          </label>
                        </div>
                      </div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal end --> */}
            
          </div>
          <div className="card-body border rounded">
            <div className="d-flex justify-content-between table-top">
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
            </div>
            <div className="table-responsive">
            <table className="table table-bordered">
                <thead style={{backgroundColor:"#ededed"}}>
                  <tr>
                  <th scope="col">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                    </th>
                    <th scope="col">Order ID</th>
                    <th scope="col"> way</th>
                    <th scope="col">Vendor</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Income Date</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Update At</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th scope="col">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                    </th>
                    <th scope="row">01</th>
                    <td>Billal Farabi</td>
                    <td>Hotel seraton</td>
                    <td>640.00</td>
                    <td>2021-12-25 </td>
                    <td>2021-12-25 01:33:22</td>
                    <td>2021-12-25 01:33:22</td>
                    
                    
                    <td>Pending</td>
                    <td className="d-flex justify-content-center align-items-center">
                      
                      <Link to='/edit'> <i className="fas fa-edit " style={{color: "#660000"}}></i></Link>
                      <Link to='/invoice'> <i className="fas fa-eye m-1 " ></i></Link>
                      <i className="fas fa-trash text-danger "></i>
                    </td>
                   </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
};

export default Expense;