import React from "react";
import Header from "../../Header";

const AllFood = () => {
  return (
    <div>
      <Header />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Food List</h4>
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
                    <th scope="col">Image</th>
                    <th scope="col">Restaurant Name</th>
                    <th scope="col">Food Item Name</th>
                    <th scope="col">Food Item Code</th>
                    <th scope="col">Catgory Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Fooddoose</td>
                    <td>Burger</td>
                    <td>Fastfood</td>
                    <td>F-265</td>
                    <td className="text-center">200 ৳</td>
                    <td>Active</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Fooddoose</td>
                    <td>Burger</td>
                    <td>Fastfood</td>
                    <td>F-265</td>
                    <td className="text-center">200 ৳</td>
                    <td>Active</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Fooddoose</td>
                    <td>Burger</td>
                    <td>Fastfood</td>
                    <td>F-265</td>
                    <td className="text-center">200 ৳</td>
                    <td>Active</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Fooddoose</td>
                    <td>Burger</td>
                    <td>Fastfood</td>
                    <td>F-265</td>
                    <td className="text-center">200 ৳</td>
                    <td>Active</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Fooddoose</td>
                    <td>Burger</td>
                    <td>Fastfood</td>
                    <td>F-265</td>
                    <td className="text-center">200 ৳</td>
                    <td>Active</td>
                    <td style={{minWidth: "100px"}}>
                      <i className="fas fa-edit" style={{color: "#660000"}}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Fooddoose</td>
                    <td>Burger</td>
                    <td>Fastfood</td>
                    <td>F-265</td>
                    <td className="text-center">200 ৳</td>
                    <td>Active</td>
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

export default AllFood;
