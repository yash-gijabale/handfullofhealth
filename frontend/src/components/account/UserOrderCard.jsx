import React from "react";
import "./userAccount.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiDotsVertical } from "react-icons/hi";
import Badge from "../badge/Badge";

const UserOrderCard = ({order}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="user-order-sub-card">
      <div className="ordre-id">
        <span>{order._id}</span>
      </div>

      <div className="order-products">
        <span>{order.orderItems.length}</span>
      </div>

      <div className="order-total">
        <span>₹ {order.totalAmount}</span>
      </div>

      <div className="order-status">
        <Badge title={`${order.status}`} color={`${order.status}`} />
      </div>

      <div className="order-action">
        <Button
          disableRipple
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <HiDotsVertical />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>View</MenuItem>
          <MenuItem onClick={handleClose}>Download</MenuItem>
          <MenuItem onClick={handleClose} style={{color:'red'}}>Cancle</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default UserOrderCard;
