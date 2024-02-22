import React, {useState} from "react";
import "./userAccount.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiDotsVertical } from "react-icons/hi";
import Badge from "../badge/Badge";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import OrderModal from "../orderModal/OrderModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '70%',
  borderRadius:'10px',
  height: '80%',
  maxHeight:'80%',
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

const UserOrderCard = ({ order }) => {
  //MODAL
  const [openModal, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

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
          <MenuItem onClick={() => {handleClose(); handleOpen()}}>View</MenuItem>
          <MenuItem onClick={handleClose}>Download</MenuItem>
          <MenuItem onClick={handleClose} style={{ color: "red" }}>
            {order.status != 'cancled' ? 'Cancle' : 'Undo'}
          </MenuItem>
        </Menu>
      </div>

        {/* ORDER MODAL */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal-body">
            <OrderModal order={order}/>
          </Box>
        </Modal>
    </div>
  );
};

export default UserOrderCard;
