import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import UserConsumer from "../context";

class AddUser extends Component {
  state = {
    isVisible: false,
    name: "",
    Salary: "",
    Department: "",
  };
  changeIsVisible(e) {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }
  changeInput = (e) => {
    this.setState({
      //name="name" buradaki nameyi alır

      [e.target.name]: e.target.value,
    });
  };
  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, Department, Salary } = this.state;
    const newUser = {
      id: uuid(),
      name: name,
      Department: Department,
      Salary: Salary,
    };

    dispatch({ type: "ADD_USER", payload: newUser });
  };

  render() {
    const { isVisible, name, Salary, Department } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              {isVisible ? (
                <div>
                  <div className="d-grid gap-2">
                    <button
                      onClick={this.changeIsVisible.bind(this)}
                      className="btn btn-secondary mb-2"
                      type="button"
                    >
                      Hide Form
                    </button>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.addUser.bind(this, dispatch)}>
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">
                            Name :
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={this.changeInput.bind(this)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Department" className="form-label">
                            Department :
                          </label>
                          <input
                            type="text"
                            name="Department"
                            id="department"
                            placeholder="Enter Department"
                            className="form-control"
                            value={Department}
                            onChange={this.changeInput.bind(this)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Salary" className="form-label">
                            Salary :
                          </label>
                          <input
                            type="text"
                            name="Salary"
                            id="salary"
                            placeholder="Enter Salary"
                            className="form-control"
                            value={Salary}
                            onChange={this.changeInput.bind(this)}
                          />
                        </div>
                        <div className="d-grid gap-2">
                          <button className="btn btn-danger mt-2" type="submit">
                            Add User
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-grid gap-2">
                  <button
                    onClick={this.changeIsVisible.bind(this)}
                    className="btn btn-secondary"
                    type="button"
                  >
                    Show Form
                  </button>
                </div>
              )}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
