import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";
import { Order, OrderItem as OrderItemType } from "../../../type/orderType";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../State/Store";

const OrderItem = ({ item, order }: { item: OrderItemType; order: Order }) => {
  const navigate = useNavigate();
  const order1 = useAppSelector((state) => state.order);
  return (
    <div
      onClick={() => navigate(`/account/order/${order.id}/${item.id}`)} // ✅ fixed
      className=" text-sm bg-white p-5 space-y-4 vorder rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className=" font-bold text-primary-color">
            {order1.currentOrder?.orderStatus}
          </h1>
          <p>Arriving By {order.deliverDate} </p>
        </div>
      </div>
      <div className=" p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            // src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727452042/pro-ray-android-ios-cellecor-yes-original-imagydnsrany7qhy_1_m9n9t5.webp"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p>
            {/* Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI
            Voice | Split Screen Smartwatch (Black Strap, Free Size) */}
            {item.product.title}
          </p>
          <p>
            <strong>size : </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
