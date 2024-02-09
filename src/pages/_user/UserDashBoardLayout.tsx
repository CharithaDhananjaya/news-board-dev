import { Outlet } from "react-router-dom";

import NotLoggedIn from "@/components/views/NotLoggedIn";

function UserDashBoard() {
  const isAuth = false;
  return <>{!isAuth ? <NotLoggedIn /> : <Outlet />}</>;
}
export default UserDashBoard;
