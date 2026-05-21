import React from "react";

function App() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Task Manager Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="row">

        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5>Total Tasks</h5>
              <h2>25</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5>Completed</h5>
              <h2>15</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5>Pending</h5>
              <h2>10</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Task List */}
      <div className="card mt-4">
        <div className="card-header bg-dark text-white">
          Task List
        </div>

        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            Setup Jenkins Pipeline
          </li>

          <li className="list-group-item">
            Configure Docker Images
          </li>

          <li className="list-group-item">
            Deploy on Kubernetes
          </li>

          <li className="list-group-item">
            Setup Monitoring (Grafana)
          </li>

        </ul>
      </div>

    </div>
  );
}

export default App;
