import React, { Component } from "react";

import UserConsumer from "../context";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value; //state içinden aldığımız için destructing
          //console.log(users);
          return (
            <div>
              {users.map((user) => {
                return (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    Department={user.Department}
                    Salary={user.Salary}
                  ></User>
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }

  // {users.map((user) => {
  //   return (
  //     <User
  //       key={user.id}
  //       name={user.name}
  //       Department={user.Department}
  //       Salary={user.Salary}
  //     ></User>
  //   );
  // })}
}
export default Users;
