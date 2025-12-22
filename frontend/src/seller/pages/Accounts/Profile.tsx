import React from "react";
import { Edit2 } from "lucide-react";

const ProfileFieldCard = ({ keys, value }: { keys: string; value: string }) => (
  <div className="flex justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition">
    <p className="text-gray-500 font-medium w-1/3">{keys}</p>
    <p className="text-gray-800 w-2/3">{value}</p>
  </div>
);

const Profile = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b">
          <h1 className="text-2xl font-bold text-gray-700">Personal Details</h1>
          <button className="p-2 rounded-full bg-[#d02988] hover:bg-[#9e035b] text-white">
            <Edit2 size={18} />
          </button>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mt-6">
          <img
            src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24288118/2363A_0070_v0550.1080K.jpg?quality=90&strip=all&crop=20.861878453039%2C0%2C58.276243093923%2C100&w=2400"
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Fields */}
        <div className="mt-6 space-y-2">
          <ProfileFieldCard keys="Seller Name" value="Adarsha Bairagi" />
          <ProfileFieldCard
            keys="Seller Email"
            value="adarshabairagi1234@gmail.com"
          />
          <ProfileFieldCard keys="Seller Mobile" value="7501417553" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg mx-auto  mt-2">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b">
          <h1 className="text-2xl font-bold text-gray-700">Bussines Details</h1>
          <button className="p-2 rounded-full bg-[#d02988] hover:bg-[#9e035b] text-white">
            <Edit2 size={18} />
          </button>
        </div>

        {/* Fields */}
        <div className="mt-6 space-y-2">
          <ProfileFieldCard keys="Bussiness Name" value="Addd.. Clothing" />
          <ProfileFieldCard keys="GSTIN" value="KYFY165" />
          <ProfileFieldCard keys="Account Status" value="ACTIVE" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg mx-auto mt-2">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b">
          <h1 className="text-2xl font-bold text-gray-700">Pickup Address</h1>
          <button className="p-2 rounded-full bg-[#d02988] hover:bg-[#9e035b] text-white">
            <Edit2 size={18} />
          </button>
        </div>

        {/* Fields */}
        <div className="mt-6 space-y-2">
          <ProfileFieldCard
            keys="Address"
            value="Address: Sarberia,P.S- Jaynagar, South 24 pgs,743372"
          />
          <ProfileFieldCard keys="Locality" value="Jaynagar" />
          <ProfileFieldCard keys="City" value="Kolkata" />
          <ProfileFieldCard keys="State" value="West Brngal" />
          <ProfileFieldCard keys="PinCode" value="743372" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg mx-auto mt-2">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b">
          <h1 className="text-2xl font-bold text-gray-700">Bank Details</h1>
          <button className="p-2 rounded-full bg-[#d02988] hover:bg-[#9e035b] text-white">
            <Edit2 size={18} />
          </button>
        </div>

        {/* Fields */}
        <div className="mt-6 space-y-2">
          <ProfileFieldCard keys="Account Number" value="42480010003457" />
          <ProfileFieldCard keys="IFCS" value="BKID4248" />
          <ProfileFieldCard keys="Account Holder" value="Adarsha Bairagi" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
