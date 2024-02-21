import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import UserActivitySubCard from "../../components/account/UserActivitySubCard";

import bg from "../../images/bg.jpg";
import productIcon from "../../images/productIcon.png";
import orderIcon from "../../images/orderIcon.png";
import reviewIcon from "../../images/reviewIcon.png";
import commentIcon from "../../images/commentIcon.png";
import defaultAvatar from "../../images/avatar.webp";
import UserOrderCard from "../../components/account/UserOrderCard";

import axios from 'axios'

const Account = () => {
  const { user } = useSelector((state) => state.user);

  const [userTab, setUserTab] = useState("overview");

  const [myOrders, setMyOrders] = useState([])

  const toggleUserTab = (tab) => {
    setUserTab(tab);
  };

  useEffect(() =>{
    const getMyOrders = async () =>{
        const {data} = await axios.get('/api/v1/myOrders')
        console.log(data)
        setMyOrders(data.result)
    }
    getMyOrders()
  }, [])

  return user ? (
    <div className="profile-main">
      <div className="profile-container">
        <div className="profileBanner" style={{background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}></div>
        <div className="profile-info-main">
          <div className="avatar-container">
            <img src={defaultAvatar} alt="" srcset="" />
          </div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <h2>{user._id}</h2>
            <span>{user.email}</span>
            <span>
              Joined On: {new Date(user.createdAt).toLocaleDateString("en-US")}
            </span>
          </div>
        </div>
        <div className="activity-container">
          <div className="user-activity-tab">
            <button
              className={userTab === "overview" ? "user-tab-active" : ""}
              onClick={() => toggleUserTab("overview")}
            >
              Overview
            </button>
            <button
              className={userTab === "order" ? "user-tab-active" : ""}
              onClick={() => toggleUserTab("order")}
            >
              Orders
            </button>
            <button
              className={userTab === "setting" ? "user-tab-active" : ""}
              onClick={() => toggleUserTab("setting")}
            >
              Setting
            </button>
          </div>
          <div
            className={
              userTab === "overview"
                ? "overview-panel user-tab-show"
                : "overview-panel"
            }
          >
            <div className="user-details user-activity-card">
              <UserActivitySubCard
                info={{ icon: productIcon, title: "Products", count: 15 }}
              />
              <UserActivitySubCard
                info={{ icon: orderIcon, title: "Orders", count: 5 }}
              />
              <UserActivitySubCard
                info={{ icon: reviewIcon, title: "Reviews", count: 1 }}
              />
              <UserActivitySubCard
                info={{ icon: commentIcon, title: "Comments", count: 0 }}
              />
            </div>
            <div className="user-details user-activity-card"></div>
          </div>

          <div
            className={
              userTab === "order"
                ? "overview-panel user-tab-show"
                : "overview-panel"
            }
          >
            <div className="user-details user-order-card">
              <div className="order-card-header">
                <span>Order ID</span>
                <span>Products</span>
                <span>Total Amount</span>
                <span>Status</span>
                <span>Action</span>
              </div>
              {
                myOrders && myOrders.length > 0 ? 
                myOrders.map(order => (
                  <UserOrderCard order={order} key={order._id}/>
                ))
                
                : ''
              }
          
            </div>
          </div>

          <div
            className={
              userTab === "setting"
                ? "overview-panel user-tab-show"
                : "overview-panel"
            }
          >
            <div className="user-details user-activity-card"> Setting</div>
            <div className="user-details user-activity-card"></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="goto-login">
      <div className="login-box">
        <h2>Login to continue.....</h2>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Account;
