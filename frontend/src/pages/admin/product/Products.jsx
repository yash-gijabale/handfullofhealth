import React, { Fragment, useEffect, useState } from "react";
import SideBar from "../component/sitebar/SideBar";
import "./product.css";
import axios from "axios";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Loader from "../component/Loader";
import PageTitle from "../component/PageTitle";
import Checkbox from "@mui/material/Checkbox";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const columns = [
  { id: "srNo", label: "Sr No" },
  { id: "name", label: "Product Name", minWidth: 170 },

  { id: "stock", label: "Stock", minWidth: 100 },
  {
    id: "price",
    label: "price",
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 170,
    align: "right",
  },
];

const Products = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getAdminProduct = async () => {
      const productData = await (
        await axios.get("/api/v1/admin/allProducts")
      ).data.result;
      setProduct(productData.products);
      console.log(productData);
    };

    getAdminProduct();
  }, []);

  let [deleteProductIds, setDeleteProductIds] = useState([]);
  const handleChangeCheckbox = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      let old = [...deleteProductIds];
      old.push(e.target.value);
      setDeleteProductIds(old);
    } else {
      let newIds = deleteProductIds.filter((ids) => {
        return ids !== e.target.value;
      });
      setDeleteProductIds(newIds);
    }
  };
  console.log(deleteProductIds);

  return (
    <div className="admin-main">
      <SideBar />
      <div className="dashborad_main">
        <div className="dashborad_body">
          {product.length > 0 ? (
            <Fragment>
              <div className="d-flex j-between">
                <PageTitle title="Products"></PageTitle>
                <button className="admin_add_btn admin_add_dark">
                  <FaPlus /> New product
                </button>
              </div>

              <div className="admin_main_card">
                <div className="admin_card_header d-flex j-between">
                  <div className="admin_card_menubar d-flex">
                    <div className="admin_card_menu admin_card_menu_active">
                      All{" "}
                      <span className="card_menu_badge card_menu_badge_success">
                        9
                      </span>
                    </div>
                    <div className="admin_card_menu">
                      Out of Stock{" "}
                      <span className="card_menu_badge card_menu_badge_danger">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="admin_card_button">
                    {deleteProductIds.length ? (
                      <button className="admin_delete_btn">
                        <MdDelete className="icon" />{" "}
                        {`Delete(${deleteProductIds.length})`}
                      </button>
                    ): ''}
                  </div>
                </div>
                <div className="admin_card_body">
                  <Paper
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                      marginTop: "2rem",
                    }}
                    className="data_table_main"
                  >
                    <TableContainer
                      sx={{ maxHeight: 440 }}
                      className="data_table_container"
                    >
                      <Table stickyHeader aria-label="sticky table" height={90}>
                        <TableHead>
                          <TableRow height={20}>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                className="data_table"
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {product
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row, ind) => {
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  tabIndex={-1}
                                  key={row._id}
                                  height={"auto"}
                                  className="data_row"
                                >
                                  <TableCell width={50}>
                                    <Checkbox
                                      value={row._id}
                                      onChange={(e) => handleChangeCheckbox(e)}
                                    />
                                    {ind + 1}
                                  </TableCell>
                                  <TableCell>
                                    <div className="product_name_cell">
                                      <img src={row.images[0].secure_url}></img>
                                      {row.name}
                                    </div>
                                  </TableCell>
                                  <TableCell>{row.stock}</TableCell>
                                  <TableCell>
                                    {row.price.toLocaleString("hi-IN")}
                                  </TableCell>
                                  <TableCell align="right">
                                    {new Date(row.createdAt)
                                      .toISOString()
                                      .substring(0, 10)}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component="div"
                      count={product.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                </div>
              </div>
            </Fragment>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
