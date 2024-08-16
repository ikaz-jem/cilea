import React from "react";
import HeaderLogged from "./Header/HeaderLogged";
import Header from "./Header/Header";

const SiteHeader = () => {
const logged = false
  // logged ? <Header /> : <HeaderLogged />;
  // logged ?: <HeaderLogged />;
  return <HeaderLogged /> 
};

export default SiteHeader;
