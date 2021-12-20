import React, { Component } from "react";
import AddRemove from "../Buttons/AddRemove";
import WideButton from "../Buttons/WideButton";
import { connect } from "react-redux";
import { addCartItem } from "../../../store/actions";
import { deleteCartItem } from "../../../store/actions";
import "./AddToCartComp.css";

class AddToCartComp extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
  onAddItem() {
    console.log(this.props.category);
    this.props.addCartItem(this.props.sentItem);
  }
  onDeleteItem() {
    console.log(this.props.sentItem.id);
    this.props.deleteCartItem(this.props.sentItem.id);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="cart-buttons-component">
        <AddRemove onClick={this.onDeleteItem}>-</AddRemove>
        <WideButton onClick={this.onAddItem}>add to cart</WideButton>
        <AddRemove onClick={this.onAddItem}>+</AddRemove>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.productsList,
    selectedList: state.selectedList,
    category: state.category,
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (item) => dispatch(addCartItem(item)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartComp);
