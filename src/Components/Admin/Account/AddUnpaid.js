import React from 'react';
import Header from '../../Header';

const AddUnpaid = () => {
    return (
        <div>
      <Header />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="card-body  ">
            <div class="row g-2">
              <h4>Add Unpaid Invoice</h4>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="income"
                  />
                  <label for="floatingInputGrid">Invoice Id</label>
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
                  <label for="floatingInputGrid">Invoice to</label>
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
                  <label for="floatingInputGrid">Address</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="8648"
                  />
                  <label for="floatingInputGrid">Total</label>
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
                  <label for="floatingInputGrid">Invoice Date</label>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-25">
                save
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
};

export default AddUnpaid;