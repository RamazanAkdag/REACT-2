import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Users from "./components/Users";
import AddUser from "./components/addUser";
import { UserProvider } from "./context";

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserProvider>
          <Navbar title="React App" /*props kullanımı*/></Navbar>

          <AddUser></AddUser>
          <Users></Users>
        </UserProvider>
      </div>
    );
  }
}

export default App;
