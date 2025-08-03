import { UserButton, useUser } from "@clerk/clerk-react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();

  return (
    <div
      className={`${
        openNav ? "left-0 " : "-left-[100%] "
      } fixed bottom-0 top-0 z-20 flex h-screen w[80%] flex-col bg-white px-8 pb-7 pt-17 text-black rounded shadow-md transition-all`}
    >
      <div>
        <div className="flex items-center justify-start gap-3 ">
          {user ? <UserButton size={50} /> : <FaUser size={50} />}
          <div>
            <h1> Hello , {user?.fullName} </h1>
            <h1 className="text-sm  text-slate-500 "> Premium User </h1>
          </div>
         
        </div>
         <nav className="mt-15">
            <ul className=" flex flex-col gap-9 text-2xl  font-serif font-semibold">
              <Link
                to={"/"} 
                onClick={()=> setOpenNav(false)}
                className=" text-black cursor-pointer" >
                <li>Home </li>
              </Link>
              <Link
                to={"/products"}
                onClick={()=> setOpenNav(false)}
                className=" text-black cursor-pointer" >
                <li>Products</li>
              </Link>
              <Link
                to={"/about"}
                onClick={()=> setOpenNav(false)}
                className= "text-black  cursor-pointer" >
                <li>About</li>
              </Link>
              <Link
                to={"/contact"}
                onClick={()=> setOpenNav(false)}
                className=" text-black cursor-pointer" >
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
