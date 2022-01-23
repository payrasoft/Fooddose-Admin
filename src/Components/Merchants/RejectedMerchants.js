import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const RejectedMerchants = () => {
    return (
        <div>
             <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>Rejected Merchants</h4>{" "}
            <button className="btn btn-success mb-2"><Link to="/add-merchants">Add Merchant</Link></button>
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
                    <th scope="col">ID</th>
                    <th scope="col">Merchant Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Business Name</th>
                    <th scope="col">Bkash Number</th>
                    <th scope="col">Rocket Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>+01836288648</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>+01836288648</td>
                    <td>Approved</td>
                    <td>2021-12-25 01:33:22</td>
                    <td>
                      <i className="fas fa-edit me-3" style={{color: "#660000"}}></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>+01836288648</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>+01836288648</td>
                    <td>Approved</td>
                    <td>2021-12-25 01:33:22</td>
                    <td>
                      <i className="fas fa-edit me-3" style={{color: "#660000"}}></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>+01836288648</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>+01836288648</td>
                    <td>Approved</td>
                    <td>2021-12-25 01:33:22</td>
                    <td>
                      <i className="fas fa-edit  me-3" style={{color: "#660000"}}></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>+01836288648</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>+01836288648</td>
                    <td>Approved</td>
                    <td>2021-12-25 01:33:22</td>
                    <td>
                      <i className="fas fa-edit me-3" style={{color: "#660000"}}></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>+01836288648</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>+01836288648</td>
                    <td>Approved</td>
                    <td>2021-12-25 01:33:22</td>
                    <td>
                      <i className="fas fa-edit me-3" style={{color: "#660000"}}></i>
                      <i className="fas fa-trash text-danger"></i>
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

export default RejectedMerchants;