import React from 'react';
import Header from '../../Header';

const EditReturning = () => {
    return (
        <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="card-body  ">
            <div class="row g-2">
              <h4>Edit Returning Order</h4>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGrid "
                    placeholder="name@example.com"
                    value="Billal"
                  />
                  <label for="floatingInputGrid">Customer Name</label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
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
                    type="text"
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
                    disabled
                    type="number"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="345"
                  />
                  <label for="floatingInputGrid">Total Price</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    disabled
                    type="number"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="321"
                  />
                  <label for="floatingInputGrid">Food Price</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    disabled
                    type="number"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="324"
                  />
                  <label for="floatingInputGrid">Delivery Price</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    disabled
                    type="text"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="Cash On delivery"
                  />
                  <label for="floatingInputGrid">Payment</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="Uttara"
                  />
                  <label for="floatingInputGrid">Delivery Location</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="2021-12-25 01:33:22"
                  />
                  <label for="floatingInputGrid">Order Date</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-25 fw-bold">
                {" "}
                Update
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
};

export default EditReturning;