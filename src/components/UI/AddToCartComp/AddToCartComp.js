import React, { Component } from 'react';
import AddRemove from '../Buttons/AddRemove';
import WideButton from '../Buttons/WideButton';
import { connect } from 'react-redux';
import { addCartItem } from '../../../store/actions';
import { deleteCartItem } from '../../../store/actions';
import './AddToCartComp.css';

class AddToCartComp extends Component {
  constructor(props) {
    super(props);
    this.state = { showMsg: false };
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
  onAddItem(clicked) {
    console.log();
    if (this.props.sentItem.attributes.length < 1) {
      this.props.addCartItem(this.props.sentItem);
    } else {
      const found = clicked.find((el) => el.id === this.props.sentItem.id);
      if (found) {
        this.props.addCartItem(this.props.sentItem);
        this.setState({ showMsg: false });
      } else {
        this.setState({ showMsg: true });
      }
    }
  }
  onDeleteItem() {
    // console.log(this.props.sentItem.id);
    this.props.deleteCartItem(this.props.sentItem.id);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="add-to-cart-comp-containter">
        {this.state.showMsg && (
          <div className="pleas-add">* Please select an attribute</div>
        )}
        <div className="cart-buttons-component">
          <AddRemove onClick={this.onDeleteItem}>-</AddRemove>
          <WideButton
            onClick={() => this.onAddItem(this.props.clickedAttributes)}
          >
            add to cart
          </WideButton>
          <AddRemove onClick={this.onAddItem}>+</AddRemove>
        </div>
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
    clickedAttributes: state.clickedAttributes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (item) => dispatch(addCartItem(item)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartComp);
