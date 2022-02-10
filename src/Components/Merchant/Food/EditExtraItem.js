import React from "react";
import Header from "../../Header";


const EditExtraItem = () => {
  return (
    <div>
      <Header />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Extra Item</h4>
          <div className="row">
              <p>Update Extra Item</p>
              <form className="mt-4">
                  <div className="row">
            <div className="col-lg-4 col-md-4">
                <label htmlFor="name">Item Name</label>
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id="name"
                  value="Burger"
                />
                </div>
                <div className="col-lg-4 col-md-4">

               
                <label htmlFor="image">Image</label>
                <input
                  className="form-control"
                  type="file"
                  name=""
                  id="image"
                />
                 </div>
                 <div className="col-lg-4 col-md-4">
                <label htmlFor="price">Item Price</label>
                <input
                  className="form-control"
                  type="number"
                  name=""
                  id="price"
                  value="100"
                />
</div>
</div>
                <button className="btn common-color mt-2">
                  Add Extra Item
                </button>
              </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditExtraItem;
