import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const PendingMerchants = () => {
    return (
        <div>
              <Header />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Pending Merchants</h4>{" "}
            <button className="btn btn-success mb-2"><Link to="/all-merchants">All Merchant</Link></button>
          </div>
          <div className="card-body border rounded">
            <div className="d-flex justify-content-between table-top">
              <input
                className="form-control mb-3"
                style={{ width: "40%" }}
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
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Business Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Joined At</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>Mirpur, Dhaka</td>
                    <td>Pending</td>
                    <td>2021-12-25</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>Mirpur, Dhaka</td>
                    <td>Pending</td>
                    <td>2021-12-25</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>Mirpur, Dhaka</td>
                    <td>Pending</td>
                    <td>2021-12-25</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>Mirpur, Dhaka</td>
                    <td>Pending</td>
                    <td>2021-12-25</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Demo</td>
                    <td>Fooddoose Merchant</td>
                    <td>+01836288648</td>
                    <td>Mirpur, Dhaka</td>
                    <td>Pending</td>
                    <td>2021-12-25</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
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

export default PendingMerchants;