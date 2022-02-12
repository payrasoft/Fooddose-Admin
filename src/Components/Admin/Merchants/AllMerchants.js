import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import { useEffect, useState } from "react";


const AllMerchants = () => {
  
    const [merchants, setMerchants] = useState([])

    const fetchData = () => {
      fetch("http://127.0.0.1:8000/api/merchants")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setMerchants(data)
        })
    }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>All Merchants</h4>{" "}
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
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Business Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Total Food</th>
                    <th scope="col">Delivered</th>
                    <th scope="col">Income</th>
                    <th scope="col">Status</th>
                    <th scope="col">Joined At</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {merchants.length > 0 && (
                <tbody>
                  {merchants.map(merchant => (
                    <tr>
                      <th><input type="checkbox" name="" id="" /></th>
                      <th scope="row">1</th>
                      <td>{merchant.user.name}</td>
                      <td>{merchant.business_name}</td>
                      <td>{merchant.user.phone}</td>
                      <td className="text-center">20</td>
                      <td className="text-center">20</td>
                      <td className="text-center">20000 ৳</td>
                      <td>{(merchant.status === '0') ? <div>Inactive</div> : <div>Active</div>}</td>
                      <td>{merchant.created_at}</td>
                      <td style={{minWidth: "100px"}}>
                        <i className="fas fa-edit" style={{color: "#660000"}}></i>
                        <i className='fas fa-eye mx-2'></i>
                        <i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    ))}
                </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllMerchants;
