import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import {
  fetchSellerOrders,
  updateOrderStatus,
} from "../../../State/Seller/sellerOrderSlice";
import { Button, Menu, MenuItem } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const orderStatusColor = {
  PENDING: { color: "#FFA500", label: "PENDING" }, // Orange
  CONFIRMED: { color: "#F5BCBA", label: "CONFIRMED" },
  PLACED: { color: "#F5BCBA", label: "PLACED" },
  SHIPPED: { color: "#1E90FF", label: "SHIPPED" }, // DodgerBlue
  ARRIVING: { color: "#32CD32", label: "ARRIVING" }, // LimeGreen
  DELIVERED: { color: "#32CD32", label: "DELIVERED" },
  CANCELLED: { color: "#FF0000", label: "CANCELLED" }, // Red
};

const orderStatus = [
  { color: "#FFA500", label: "PENDING" },
  { color: "#F5BCBA", label: "PLACED" },
  { color: "#F5BCBA", label: "CONFIRMED" },
  { color: "#1E90FF", label: "SHIPPED" },
  { color: "#32CD32", label: "ARRIVING" },
  { color: "#32CD32", label: "DELIVERED" },
  { color: "#FF0000", label: "CANCELLED" },
];

export default function OrderTable() {
  const dispatch = useAppDispatch();
  const sellerOrder = useAppSelector((state) => state.sellerOrder);
  React.useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""));
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<{
    [key: number]: HTMLElement | null;
  }>({});

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    orderId: number
  ) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleClose = (orderId: number) => () => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
  };

  const handleUpdateOrderStatus =
    (orderId: number, newStatus: string) => () => {
      dispatch(
        updateOrderStatus({
          jwt: localStorage.getItem("jwt") || "",
          orderId,
          orderStatus: newStatus as any,
        })
      );
      handleClose(orderId);
    };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrder.orders.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell>
                <div className="flex gap-3 flex-wrap">
                  {item.orderItems.map((orderItem, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <img
                        className="w-20 rounded-md"
                        src={orderItem.product.images[0]}
                        alt={orderItem.product.title}
                      />
                      <div className="flex flex-col justify-between py-2">
                        <h1 className="text-sm font-medium text-gray-700">
                          Title: {orderItem.product.title}
                        </h1>
                        <h1 className="text-sm font-medium text-gray-700">
                          Total: ₹{orderItem.product.sellingPrice}
                        </h1>
                        <h1 className="text-sm font-medium text-gray-700">
                          Color: {orderItem.product.color}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </StyledTableCell>

              <StyledTableCell align="right">
                <div className=" flex flex-col gap-y-2 items-start">
                  <h1>Address : {item.shippingAddress.address}</h1>
                  <h1>City : {item.shippingAddress.city}</h1>
                  <h1>Atate : {item.shippingAddress.state}</h1>
                  <h1>Pin Code : {item.shippingAddress.pinCode}</h1>
                  <h1>Mobile : {item.shippingAddress.mobile}</h1>
                  {/* <h1>{item.shippingAddress.address}</h1> */}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <span className=" px-5 py-2 border border-primary-color rounded-full text-primary-color">
                  {item.orderStatus}
                </span>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={(e) => handleClick(e, item.id)}>
                  {item.orderStatus}
                </Button>
                <Menu
                  id={`status-menu-${item.id}`}
                  anchorEl={anchorEl[item.id]}
                  open={Boolean(anchorEl[item.id])}
                  onClose={handleClose(item.id)}
                  slotProps={{
                    list: {
                      "aria-labelledby": `status-menu-${item.id}`,
                    },
                  }}
                >
                  {orderStatus.map((status) => (
                    <MenuItem
                      key={status.color}
                      onClick={handleUpdateOrderStatus(item.id, status.label)}
                    >
                      {status.label}
                    </MenuItem>
                  ))}
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
