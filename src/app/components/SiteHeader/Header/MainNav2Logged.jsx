"use client"
import React, { FC, useState } from "react";
import Logo from "../../../shared/Logo/Logo";
import MenuBar from "../../../shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "../../../shared/MenuBar/Navigation/Navigation";
import CartDropdown from "./CartDropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";




const MainNav2Logged = () => {


  const LoginButton = ()=>  {
    const { user, error, isLoading } = useUser();
  
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;
  
    if (user) {
      return (
        <div className="w-10 h-5 bg-neutral-100">
          Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        </div>
      );
    } else {

      return <Link href="/api/auth/login" className="text-4xl font-bold text-black w-10 h-5 bg-neutral-100">Login</Link>;
    }
  
  }


  const inputRef = React.createRef();

  const renderMagnifyingGlassIcon = () => {
    return (
      <div className="bg-black w-10 h-10 flex items-center justify-center">
      
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          />
        <path
          d="M22 22L20 20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          />
      </svg>
          </div>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // navigate("/page-search");
        }}
        className="flex-1 py-1 text-slate-900 dark:text-slate-100"
      >
        <div className="bg-white flex items-center space-x-1.5 pl-5 h-10  border border-black">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type and press enter"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
            autoFocus
            />
          <button type="button" >
            {renderMagnifyingGlassIcon()}
          </button>
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const renderContent = () => {
    return (
      <div className="  flex justify-between">
        <div className="flex items-center lg:hidden flex-1">
          <MenuBar />
        </div>

        <div className="lg:flex-1 flex items-center">
          <Logo className="flex-shrink-0" />
        </div>

        <div className="flex-[2] hidden items-center lg:flex justify-center mx-4">
          {renderSearchForm()}
          {/* {showSearchForm ? renderSearchForm() : <Navigation />} */}

        </div>

        <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
          
          {/* <LoginButton /> */}
          <AvatarDropdown />
          <CartDropdown />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-MainNav2Logged relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
      <div className="px-5 sm:px-10 md:px-20 lg:px-32 flex flex-col  ">
        {renderContent()}
        <div className=" w-full hidden items-center lg:flex justify-start mx-4">

           <Navigation />
        </div>
        </div>
    </div>
  );
};

export default MainNav2Logged;
