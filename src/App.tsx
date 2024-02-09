import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "@/pages/_auth/AuthLayout";
import SigninForm from "@/pages/_auth/forms/SigninForm";
import SignupForm from "@/pages/_auth/forms/SignupForm";

import RootLayout from "@/pages/_root/RootLayout";
import Home from "@/pages/_root/views/Home";

import UserDashBoardLayout from "@/pages/_user/UserDashBoardLayout";
import UserDashbaord from "@/pages/_user/views/UserDashBoard";

function App() {
  return (
    <>
      <main className="flex w-screen h-screen">
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SigninForm />}></Route>
              <Route path="/sign-up" element={<SignupForm />}></Route>
            </Route>
            <Route element={<RootLayout />}>
              <Route index element={<Home />}></Route>
            </Route>
            <Route element={<UserDashBoardLayout />}>
              <Route path="/user-dashboard" element={<UserDashbaord />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
