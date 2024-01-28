import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <section className="flex flex-col items-center justify-center flex-1 px-10 py-5 md:px-20 md:py-10">
        <Outlet />
      </section>
      <div className="relative flex-col items-center justify-center flex-1 hidden object-cover w-1/2 h-screen py-10 bg-no-repeat bg-sky-900 md:flex">
        <div>
          <span className="text-5xl font-medium text-center text-white">
            NewsBoard
          </span>
        </div>
        <div className="absolute bottom-0 p-2 text-sm font-light text-center text-white md:pb-4">
          Created by Charitha Dhananjaya
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
