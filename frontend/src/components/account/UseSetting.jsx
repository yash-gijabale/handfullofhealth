import React from "react";

const UserSetting = ({ user }) => {
  return (
    <div className="user-setting-box">
      <div className="user-info-box">
        <h2>Your Details</h2>
        <form>
          <input type="text" value={user.name} placeholder="Enter name" />
          <input type="text" value={user.email} placeholder="Enter email" />
          <button>Save</button>
        </form>
      </div>
      <div className="change-password">
        <h2>Change password</h2>
        <form>
            <input type="text" placeholder="Old Passowrd" />
            <input type="text"  placeholder="New Password" />
          <button>Save</button>

        </form>
      </div>
    </div>
  );
};

export default UserSetting;
