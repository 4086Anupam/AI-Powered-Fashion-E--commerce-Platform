// import { ListItemIcon, ListItemText } from "@mui/material";
// import React from "react";
// import { useLocation } from "react-router-dom";

// interface menuItem {
//   name: string;
//   path: string;
//   icon: any;
//   activeIcon: any;
// }

// interface DrawerListProp {
//   menu: menuItem[];
//   menu2: menuItem[];
//   toggleDrawer: () => void;
// }
// const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
//   const location = useLocation();
//   //   {console.log("item path" + item.path)}
//   console.log("location pathname" + location.pathname);
//   return (
//     <div className=" h-full">
//       <div className=" flex flex-col justify-between h-full w-[300px] border-r py-5">
//         <div>
//           <div className=" space-y-5">
//             {menu.map((item, index: number) => (
//               <div className=" pr-9 cursor-pointer" key={index}>
//                 <p
//                   className={`${
//                     item.path == location.pathname
//                       ? "bg-primary-color text-white"
//                       : "text-primary-color"
//                   } flex items-center px-5 py-3 rounded-r-full`}
//                 >
//                   <ListItemIcon>
//                     {item.path == location.pathname
//                       ? item.activeIcon
//                       : item.icon}
//                   </ListItemIcon>
//                   <ListItemText primary={item.name} />
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DrawerList;

import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../State/Store";
import { logout } from "../State/AuthSlice";
// import { Logout } from "@mui/icons-material";

interface MenuItem {
  name: string;
  path: string;
  icon: any;
  activeIcon: any;
}

interface DrawerListProps {
  menu: MenuItem[];
  menu2: MenuItem[];
  toggleDrawer: () => void;
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const handleLogout = async () => {
  //   await dispatch(logout());
  //   navigate("/");
  // };
  const handleLogout = async () => {
    console.log("Logout clicked"); // debug
    await dispatch(logout());
    navigate("/");
  };

  const isRouteActive = (basePath: string) => {
    if (basePath === "/seller") {
      return location.pathname === "/seller";
    }
    return (
      location.pathname === basePath ||
      location.pathname.startsWith(`${basePath}/`)
    );
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[280px] border-r py-6 bg-white shadow-sm">
        {/* TOP MENU */}
        <div className="space-y-2">
          {menu.map((item, index) => {
            const isActive = isRouteActive(item.path);
            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className="cursor-pointer select-none"
              >
                <div
                  className={`flex items-center px-5 py-3 rounded-r-3xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#007B5E] text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: isActive ? "#fff" : "#007B5E",
                      transition: "color 0.3s",
                    }}
                  >
                    {isActive ? item.activeIcon : item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      span: {
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "0.95rem",
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Divider />

        {/* BOTTOM MENU */}
        <div className="space-y-2 border-t pt-4">
          {menu2.map((item, index) => {
            const isActive = isRouteActive(item.path);
            return (
              <div
                key={index}
                onClick={() => {
                  if (item.path === "/") {
                    handleLogout();
                    console.log("Logout clicked");
                  } else {
                    navigate(item.path);
                    console.log(item.name);
                  }
                }}
                className="cursor-pointer select-none"
              >
                <div
                  className={`flex items-center px-5 py-3 rounded-r-3xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#007B5E] text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: isActive ? "#fff" : "#007B5E",
                      transition: "color 0.3s",
                    }}
                  >
                    {isActive ? item.activeIcon : item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      span: {
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "0.95rem",
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DrawerList;
