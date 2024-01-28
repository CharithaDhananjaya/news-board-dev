import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "@/pages/_auth/AuthLayout";
import SigninForm from "@/pages/_auth/forms/SigninForm";
import SignupForm from "@/pages/_auth/forms/SignupForm";

import RootLayout from "@/pages/_root/RootLayout";
import Home from "@/pages/_root/pages/Home";

import UserDashBoard from "@/pages/_user/UserDashBoard";

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
            <Route path="/user-dashboard" element={<UserDashBoard />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
