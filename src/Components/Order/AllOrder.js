import React from 'react';
import Header from './../Header';

const AllOrder = () => {
    return (
        <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
        <div className="d-flex justify-content-between top-content">
            <h4>All Order page section</h4>{" "}
            
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
                    <th scope="col">Order ID</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Sub Total</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Transaction Number</th>
                    <th scope="col">Created At</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">01</th>
                    <td>432</td>
                    <td>Billal Farabi</td>
                    <td>+01836288648</td>
                    <td>018</td>
                    <td>648</td>
                    <td>Pending</td>
                    <td>000</td>
                    <td>2021-12-25 01:33:22</td>
                   </tr>
                  <tr>
                    <th scope="row">02</th>
                    <td>432</td>
                    <td>Billal Farabi</td>
                    <td>+01836288648</td>
                    <td>018</td>
                    <td>648</td>
                    <td>Pending</td>
                    <td>000</td>
                    <td>2021-12-25 01:33:22</td>
                   </tr>
                  <tr>
                    <th scope="row">03</th>
                    <td>432</td>
                    <td>Billal Farabi</td>
                    <td>+01836288648</td>
                    <td>018</td>
                    <td>648</td>
                    <td>Pending</td>
                    <td>000</td>
                    <td>2021-12-25 01:33:22</td>
                   </tr>
                  <tr>
                    <th scope="row">04</th>
                    <td>432</td>
                    <td>Billal Farabi</td>
                    <td>+01836288648</td>
                    <td>018</td>
                    <td>648</td>
                    <td>Pending</td>
                    <td>000</td>
                    <td>2021-12-25 01:33:22</td>
                   </tr>
                  <tr>
                    <th scope="row">05</th>
                    <td>432</td>
                    <td>Billal Farabi</td>
                    <td>+01836288648</td>
                    <td>018</td>
                    <td>648</td>
                    <td>Pending</td>
                    <td>000</td>
                    <td>2021-12-25 01:33:22</td>
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

export default AllOrder;