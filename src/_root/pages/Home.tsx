import NavBar from "@/components/NavBar";
import Input from "@/components/Input";

function Home() {
  return (
    <>
      <div className="flex w-screen h-full border border-gray-500">
        <NavBar />
        <div className="px-4">
          <Input></Input>
        </div>
      </div>
    </>
  );
}

export default Home;
