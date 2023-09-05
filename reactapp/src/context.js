import React, { Component } from "react";
import axios from "axios";

const userContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      axios.post("http://localhost:3001/users", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount = async () => {
    const usersRes = await axios.get("http://localhost:3001/users");

    this.setState({
      users: usersRes.data,
    });
  };

  render() {
    return (
      <userContext.Provider value={this.state}>
        {this.props.children}
      </userContext.Provider>
    );
  }
}

const UserConsumer = userContext.Consumer;

export default UserConsumer;
