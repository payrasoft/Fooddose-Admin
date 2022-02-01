import React from 'react';
import Header from '../../Header';
import { Link } from 'react-router-dom';

const AllOrderMerchant = () => {
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
                    <th scope="col"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/></th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Restaurant name</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Food Price</th>
                    <th scope="col">Delivery Price</th>
                    <th scope="col">Delivery Location</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th ><input class="form-check-input  " type="checkbox" value="" aria-label="Checkbox for following text input"/></th>
                    <th scope="row">01</th>
                    <td>Billal Farabi</td>
                    <td>Hotel seraton</td>
                    <td>+01836288648</td>
                    <td>018</td>
                    <td>648</td>
                    <td>640</td>
                    <td>uttara</td>
                    <td>Cash on delivery</td>
                    <td>2021-12-25 01:33:22</td>
                    <td>Pending</td>
                    <td className="d-flex justify-content-center align-items-center">
                      
                      <Link to='/edit-all-order'> <i className="fas fa-edit " style={{color: "#660000"}}></i></Link>
                      <Link to='/order-invoice-merchant'> <i className="fas fa-eye m-1 " ></i></Link>
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

export default AllOrderMerchant;