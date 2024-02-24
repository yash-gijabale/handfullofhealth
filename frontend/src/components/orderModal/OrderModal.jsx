import React, { useState } from "react";
import "./orderModal.css";
import { FaDownload } from "react-icons/fa";

const OrderModal = ({ order }) => {
  let srNo = 0;
  let totalPrice = 0;
  return (
    <div className="orderModal-main">
      <div className="order-id">
        <div className="order-info">
          <h4>OrderId: {order._id}</h4>
          <span className="mini-badge mini-badge-primary">proccessing</span>
        </div>
        <div className="order-btns">
          <span className="mini-badge mini-badge-secondary"><FaDownload /></span>
        </div>
      </div>

      <div className="order-address">
        <div className="personal-info">
          <div>
            <span className="address-title">Name: </span>
            <span className="address-sub">{`${order.firstName} ${order.lastName}`}</span>
          </div>
          <div>
            <span className="address-title">Email: </span>
            <span className="address-sub">{order.email}</span>
          </div>
          <div>
            <span className="address-title">Number: </span>
            <span className="address-sub">{order.mobileNumber}</span>
          </div>
        </div>

        <div className="address-info">
          <div>
            <span className="address-title">Address: </span>
            <span className="address-sub">{order.address}</span>
          </div>
          <div>
            <span className="address-title">City: </span>
            <span className="address-sub">{order.city}, </span>
            <span className="address-title">State: </span>
            <span className="address-sub">{order.state}</span>
          </div>
          <div>
            <span className="address-title">Pincode: </span>
            <span className="address-sub">{order.pincode}</span>
          </div>
        </div>
      </div>
      <div className="order-products-modal">
        <table className="order-product-table">
          <thead>
            <th>Sr No.</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Qty</th>
            <th>Total</th>
          </thead>

          <tbody>
            {order.orderItems.map((product) => {
              srNo += 1;
              totalPrice += product.price * product.productQty;
              return (
                <tr className="order-product-card" key={product._id}>
                  <td>{srNo}</td>
                  <td>
                    <img src={product.images[0].secure_url} alt="" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.productQty}</td>
                  <td>{product.price * product.productQty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="order-product-modal-footer">
        <span>Total: ₹ {totalPrice}.00</span>
      </div>
    </div>
  );
};

export default OrderModal;
