"use client"

import React from "react";
import { Disclosure,DisclosurePanel,DisclosureButton } from "@headlessui/react";

import { DashboardMenuLinks } from "../../../data/profileNavigation";
import ButtonPrimary from "../../Button/ButtonPrimary";
import SocialsList from "../../SocialsList/SocialsList";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";

import Link from "next/link";


const ProfileNavigation= ({
  data = DashboardMenuLinks ,
  onClickClose,
}) => {
  const _renderMenuChild = (
    item,
    itemClass = " text-neutral-900 dark:text-neutral-200 font-medium "
  ) => {
    return (
      <ul className="nav-mobile-sub-menu pl-5 pb-1 text-base">
        {item.children?.map(({name,href,LinkIcon,id,children},index) => (
          <Disclosure key={id + index} as="li">
            <Link
              href={{
                pathname:href || undefined,
              }}
              className={
                `flex text-sm rounded-lg gap-2 hover:bg-orange-100 dark:hover:bg-neutral-800 mt-0.5 pr-4 items-center ${itemClass} `
              }
            >

          {LinkIcon && <LinkIcon className="ml-2 h-5 w-5 text-slate-500" aria-hidden="true"/>}

              <span
                className={`py-2.5 text-xs ${!children ? "block w-full" : ""}`}
                onClick={onClickClose}
              >
                {name}
              </span>
              {children && (
                <span
                  className="flex items-center flex-grow"
                  onClick={(e) => e.preventDefault()}
                >
                  <DisclosureButton
                    as="span"
                    className="flex justify-end flex-grow items-center"
                  >
                    <ChevronDownIcon
                      className="ml-2 h-4 w-4 text-slate-500"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                </span>
              )}
            </Link>
            {children && (
              <DisclosurePanel>
                {_renderMenuChild(
                  i,
                  "pl-3 text-slate-600 dark:text-slate-400 "
                )}
              </DisclosurePanel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item, index) => {
    return (
      <Disclosure
        key={index}
        as="li"
        className="text-slate-900 dark:text-white"
        defaultOpen={index ==0 ?true:false}
      >
        <p
          className={
            `flex w-full cursor-pointer items-center py-2.5 px-4 font-semibold uppercase tracking-wide text-sm hover:bg-orange-100 dark:hover:bg-slate-800 rounded-lg `
          }
         
        >
          <span
            className={!item.children ? "block w-full" : ""}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <DisclosureButton
                as="span"
                className="flex justify-end flex-grow"
              >
                <ChevronDownIcon
                  className="ml-2 h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
              </DisclosureButton>
            </span>
          )}
        </p>
        {item.children && (
          <DisclosurePanel>{_renderMenuChild(item)}</DisclosurePanel>
        )}
      </Disclosure>
    );
  };

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        action=""
        method="POST"
        className="flex-1 text-slate-900 dark:text-slate-200"
      >
        <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1 py-2 px-4 rounded-xl h-full">
          {renderMagnifyingGlassIcon()}
          <input
            type="search"
            placeholder="Type and press enter"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm "
          />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  return (
    <div className="overflow-y-auto w-full h-screen py-2 transition transform    bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5">
        <div className="mt-5">{renderSearchForm()}</div>
      </div>
     
      <ul className="flex flex-col py-6 px-2 space-y-1 justify-center">
          {data.map(_renderItem)}
      </ul>

      <div className="flex items-center justify-between py-6 px-5 space-x-2">
        <ButtonPrimary href={"/"} className="!px-10">
          E-commerce
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default ProfileNavigation;
