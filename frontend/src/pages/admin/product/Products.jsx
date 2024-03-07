import React from "react";
import SideBar from "../component/sitebar/SideBar";

const Products = () => {
  return (
    <div className="admin-main">
      <SideBar />
      <div className="dashborad_main">
        <div className="dashborad_body">
          <div className="ads_main">
            <div className="current_ad_main">
              <div className="info_box">
                <div>
                  <h4>Welcome PRoduct!</h4>
                  <h4>Create your first Campaign</h4>
                </div>
                <span>Create your campaign to boost your business</span>
                <button>Go Now</button>
              </div>
              <div className="img-box">
                <img src={''} alt="boost" />
              </div>
            </div>
            <div className="current_ad2_main"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
