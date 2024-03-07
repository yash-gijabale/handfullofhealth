import React from "react";

import "./siteBar.css";
import logo from "../../../../images/logo.png";
import SitebarMenu from "./SitebarMenu";

import { MdSpaceDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { SiCampaignmonitor } from "react-icons/si";
import { useLocation } from "react-router-dom";
const SideBar = () => {
  const url = useLocation();
  console.log(url.pathname);

  return (
    <div className="sitebar_main">
      <div className="sidebar_header">
        <div className="sidebar_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar_title">
          <span>OVERVIEW</span>
        </div>
      </div>
      <div className="sidebar_body">
        <SitebarMenu
          menu={{
            title: "Dashboard",
            icon: MdSpaceDashboard,
            url: "/admin/dashboard",
            isActive: url.pathname == "/admin/dashboard" ? true : false,
          }}
        />

        <SitebarMenu
          menu={{
            title: "User",
            icon: FaUserCircle,
            isActive: true,
            url: "/admin/users",
            isActive: url.pathname == "/admin/users" ? true : false,
          }}
        />

        <SitebarMenu
          menu={{
            title: "Product",
            icon: FaBagShopping,
            url: "/admin/products",
            isActive: url.pathname == "/admin/products" ? true : false,
          }}
        />

        <SitebarMenu
          menu={{
            title: "Order",
            icon: FaCartShopping,
            isActive: false,
            url: "/admin/orders",
            isActive: url.pathname == "/admin/orders"? true : false,
          }}
        />

        <SitebarMenu
          menu={{
            title: "Campaign",
            icon: SiGoogleads,
            isActive: false,
            url: "/admin/campaign",
            isActive: url.pathname == "/admin/campaign" ? true : false,
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
