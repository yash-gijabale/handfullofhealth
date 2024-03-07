import React from "react";
import SideBar from "../component/sitebar/SideBar";

import "./dashboard.css";

import boost from "../../../images/boost.png";
import soldProduct from "../../../images/soldProduct.png";
import profit from "../../../images/profit.png";
import balance from "../../../images/balance.png";

import AnalyticCard from "../component/AnalyticCard";

const Dashboard = () => {
  return (
    <div className="admin-main">
      <SideBar />
      <div className="dashborad_main">
        <div className="dashborad_body">
          <div className="ads_main">
            <div className="current_ad_main">
              <div className="info_box">
                <div>
                  <h4>Welcome Oggy!</h4>
                  <h4>Create your first Campaign</h4>
                </div>
                <span>Create your campaign to boost your business</span>
                <button>Go Now</button>
              </div>
              <div className="img-box">
                <img src={boost} alt="boost" />
              </div>
            </div>
            <div className="current_ad2_main"></div>
          </div>

          <div className="analitic_card_main">
            <AnalyticCard
              data={{
                title: "Product Sold",
                count: 760,
                grouth: 2.6,
                icon: soldProduct,
              }}
            />
            <AnalyticCard
              data={{
                title: "Total Balance",
                count: 76000,
                grouth: 2.6,
                icon: balance,
              }}
            />
            <AnalyticCard
              data={{
                title: "Total Profit",
                count: 8600,
                grouth: 2.6,
                icon: profit,
              }}
            />
          </div>

          <div className="analitic_card_main">
            <AnalyticCard
              data={{
                title: "Current Products",
                count: 100,
                grouth: 2.6,
                icon: soldProduct,
                newClass: "success_card",
              }}
            />
            <AnalyticCard
              data={{
                title: "Out of Stock",
                count: 10,
                grouth: 2.6,
                icon: balance,
                newClass: "alert",
              }}
            />
            <AnalyticCard
              data={{
                title: "Total Profit",
                count: 8600,
                grouth: 2.6,
                icon: profit,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
