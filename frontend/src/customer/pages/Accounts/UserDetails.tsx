import React from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import { Divider } from "@mui/material";
import { useAppSelector } from "../../../State/Store";

const UserDetails = () => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <div className=" flex justify-center py-10">
      <div className=" w-full lg:w-[70%]">
        <div className=" flex items-center pb-3 justify-between">
          <h1 className=" text-2xl font-bold text-gray-600">
            Personal Details
          </h1>
        </div>
        <div>
          {/* Avatar */}
          <img
            src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24288118/2363A_0070_v0550.1080K.jpg?quality=90&strip=all&crop=20.861878453039%2C0%2C58.276243093923%2C100&w=2400"
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full object-cover shadow-md mb-5"
          />

          <ProfileFieldCard keys="Name" value={auth.user?.fullName || ""} />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={auth.user?.mobile || ""} />
          <Divider />
          <ProfileFieldCard keys="Email" value={auth.user?.email || ""} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
