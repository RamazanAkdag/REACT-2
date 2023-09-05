import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";

//rcc yazıp çıkana enter yaparsan sana component yapısı gelir
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  /*jsde miras alan classta bir süper clastan alınna fonksiyonu kullanırsan
  o fonkun içinde kullandığın this anahtar kelimesi classın objesini 
  gösterir fakat kendi fonksiyonunu yazıyorsan onun içinde kullandığın this 
  undefined olur ve onu bind ile bağlaman gerekir */
  onClickDeleteEvent = (dispatch, e) => {
    //arrow function kullanırsak otomatik bind işlemi yapıyor
    const { id } = this.props;
    dispatch({ type: "DELETE_USER", payload: id });

    // this.setState({
    //   isVisible: !this.state.isVisible,
    // });
  };

  setIsVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };
  render() {
    const { name, Department, Salary } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div
                  className="card-header d-flex justify-content-between"
                  onClick={this.setIsVisible.bind(this)}
                >
                  <h4
                    className="d-inline"
                    onClick={
                      /*burada geçerli olan this onclickevent de de geçerli olsun :*/
                      this.onClickDeleteEvent.bind(this, dispatch)
                    }
                  >
                    {name}
                  </h4>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Maaş : {Salary}</p>
                    <p className="card-text">Departman : {Department}</p>
                    <p className="card-text">{this.state.isVisible}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  Department: PropTypes.string.isRequired,
  Salary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default User;
