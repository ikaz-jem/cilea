import React from "react";
import Link from "next/link";
import SiteHeader from '../../../components/SiteHeader/SiteHeader'
import { Toaster } from "react-hot-toast";

export default function  AccountLayout  ({ children }) {
  return (
    <>
    <Toaster />

    <div className="nc-CommonLayoutProps container mx-auto">
      <div className="mt-14 sm:mt-20">
        
      </div>
        {children}
    </div>
    </>

  );
};

