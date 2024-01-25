import { useNavigate } from "react-router-dom";

import Button from "./Button";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-between w-screen px-8 py-2 h-fit">
      <div className="text-xl font-bold text-blue-900">NewsBoard</div>
      <div className="flex flex-row gap-2">
        <Button onClick={() => navigate("/sign-in")}>Login</Button>
        <Button variant="text" onClick={() => navigate("/sign-up")}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
