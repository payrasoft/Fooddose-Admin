import React from "react";
import Header from "../../Header";


const data = [
    {
      name: "Burger",
      description: "-",
      slug: "Burger",
      count: "57"
    },
    {
      name: "Pizza",
      description: "-",
      slug: "Pizza",
      count: "57"
    },
    {
      name: "Juice",
      description: "-",
      slug: "Juice",
      count: "57"
    },
    {
      name: "Sandwice",
      description: "-",
      slug: "Sandwice",
      count: "57"
    },
    {
      name: "Fried Rice",
      description: "-",
      slug: "Fried Rice",
      count: "57"
    }
  ]

const Categories = () => {
  return (
    <div>
      <Header />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Categories</h4>
          {/* <div className="pending-upper-subcategory">
            <span>
              <Link to="/add-news">Add News</Link>
            </span>{" "}
            |{" "}
            <span>
              <Link to="/pending-news">Pending News</Link>
            </span>{" "}
            |{" "}
            <span>
              <Link to="/all-news">All News</Link>
            </span>
          </div> */}
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <p>Add New Category</p>
              <form className="mt-4">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id="name"
                  aria-describedby="name"
                />
                <div id="name" className="form-text mb-3">
                  The name is how it appears on your site.
                </div>

                <label htmlFor="slug">Slug</label>
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id="slug"
                  aria-describedby="slug"
                />
                <div id="slug" className="form-text mb-3">
                  The “slug” is the URL-friendly version of the name. It is
                  usually all lowercase and contains only letters, numbers, and
                  hyphens.
                </div>

                <label htmlFor="p-category">Parent category</label>
                <select
                  className="form-select form-select-sm form-control"
                  aria-label=".form-select-sm example"
                  id="p-category"
                  aria-describedby="p-category"
                >
                  <option defaultValue>None</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="p-category" className="form-text mb-3">
                  Categories, unlike tags, can have a hierarchy. You might have
                  a Jazz category, and under that have children categories for
                  Bebop and Big Band. Totally optional.
                </div>

                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  name=""
                  id="description"
                  cols="30"
                  rows="5"
                ></textarea>
                <div id="description" className="form-text mb-3">
                  The description is not prominent by default; however, some
                  themes may show it.
                </div>

                <button className="btn common-color">Add New Category</button>
              </form>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="example"
                          className="table table-bordered data-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Description</th>
                              <th>Slug</th>
                              <th>Count</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((d) => (
                              <tr key={d.name}>
                                <td>{d.name}</td>
                                <td>{d.description}</td>
                                <td>{d.slug}</td>
                                <td>{d.count}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;
