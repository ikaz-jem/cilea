import Logo from "../../shared/Logo/Logo"
import { IoMdSearch } from "react-icons/io";

import { FiShoppingCart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import Navigation from "./Navigation";


const Header = () => {
    return (
        <>
            <div className="h-max w-full bg-white-200  flex flex-col gap-2 py-1">

                <div className="flex justify-between items-center border-b px-10">

                    <Logo />

                    <div className="border border-black   bg-white flex gap-2 items-center h-max w-1/4 ">

                        <input type="text" name="" id="" className="w-full outline-none border-none ring-0" />
                        <IoMdSearch className=" bg-neutral-900 text-white p-2 text-4xl" />
                    </div>

                    <div className="flex">

                        <CiUser className="  text- p-2 text-4xl" />
                        <FiShoppingCart className="  text- p-2 text-4xl" />
                        <CiHeart className="  text- p-2 text-4xl" />
                        <TbWorld className="  text- p-2 text-4xl" />
                        <BiSupport className="  text- p-2 text-4xl" />
                    </div>
                </div>
                <div className="px-10 py-1">

                    <Navigation />
                </div>

            </div>

        </>
    )
}

export default Header