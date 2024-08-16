import Label from "../../../shared/Label/Label";
import React from "react";
import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import Input from "../../../shared/Input/Input";
import Select from "../../../shared/Select/Select";
import Textarea from "../../../shared/Textarea/Textarea";
import { avatarImgs } from "../../../data/fakeData";
import ProfileNavigation from '../../../shared/MenuBar/Navigation/ProfileNavigation'
import { UserIcon } from "@heroicons/react/24/outline";
import { TruckIcon } from "@heroicons/react/24/outline";
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { GiftTopIcon } from "@heroicons/react/24/outline";
import { WalletIcon } from "@heroicons/react/24/outline";
import { CurrencyEuroIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";


export default function AccountPage({ className = "" }) {
  return (
    <div className={`nc-AccountPage  ${className}`} data-nc-id="AccountPage">

      <div className="space-y-10 sm:space-y-12 w-full">
        {/* HEADING */}


        <div className="flex flex-col md:flex-row w-full ">

          <div className="flex gap-5 justify-between w-full ">

            <div className="h-max  w-80 shrink bg-white shadow dark:bg-neutral-900  ">

              <ProfileNavigation />

            </div>

            <div className="h-max  grow flex flex-col gap-5 ">

              <div className=" min-w-80 grow  bg-white shadow dark:bg-neutral-900  flex flex-col p-5 divide-y space-y-2">
                <div className="w-full flex justify-between">

                  <h1 className="font-bold dark:text-neutral-200">hello user</h1>
                  <p className=" dark:text-neutral-200 text-sm underline">profile</p>
                </div>


                <div className="flex w-full p-5 justify-between">

                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">
                    <p className="dark:text-neutral-200 text-3xl">3</p>
                    <p className="dark:text-neutral-200 text-sm">coupons</p>
                  </div>

                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">
                    <CurrencyEuroIcon className="w-8 h-8 dark:text-neutral-200 font-thin" />
                    <p className="dark:text-neutral-200 text-sm">Mes Points</p>
                  </div>

                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">

                    <GiftTopIcon className="w-8 h-8 dark:text-neutral-200 font-thin" />
                    <p className="dark:text-neutral-200 text-sm">cadeaux</p>
                  </div>
                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">

                    <WalletIcon className="w-8 h-8 dark:text-neutral-200 font-thin" />
                    <p className="dark:text-neutral-200 text-sm">Wallet</p>
                  </div>
                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">

                    <p className="dark:text-neutral-200 text-sm underline">voir tout</p>
                  </div>

                </div>

              </div>

              <div className=" min-w-80 grow  bg-white shadow dark:bg-neutral-900  flex flex-col p-5 divide-y space-y-2 ">
                <div className="w-full flex justify-between">

                  <h1 className="font-bold dark:text-neutral-200">Mes Commandes</h1>
                  <p className=" dark:text-neutral-200 text-sm underline">voir tout</p>
                </div>


                <div className="flex w-full p-5 gap-5 justify-between">


                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">
                    <ArchiveBoxIcon className="w-8 h-8 dark:text-neutral-200 font-thin" />
                    <p className="dark:text-neutral-200 text-sm">En cours de traitement</p>
                  </div>
                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">
                    <TruckIcon className="w-8 h-8 dark:text-neutral-200 font-thin" />
                    <p className="dark:text-neutral-200 text-sm">Expédiés</p>
                  </div>
                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">
                    <ArrowDownLeftIcon className="w-8 h-8 dark:text-neutral-200 font-thin" />
                    <p className="dark:text-neutral-200 text-sm">Retour</p>
                  </div>
                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">
                    <CreditCardIcon className="w-8 h-8 dark:text-neutral-200 font-thin" />
                    <p className="dark:text-neutral-200 text-sm">Non payé</p>
                  </div>


                  <div className="w-20 h-20 rounded cursor-pointer hover:bg-neutral-100 flex flex-col gap-2 items-center justify-center">

                    <p className="dark:text-neutral-200 text-sm underline">voir tout</p>
                  </div>

                </div>


              </div>


            </div>

            <div className="flex flex-col h-max gap-5">




              <div className="h-max  w-80 bg-white shadow dark:bg-neutral-900 p-5  ">

                <div className="w-20 h-20  flex flex-col gap-2 ">

                  <p className="dark:text-neutral-200 text-sm underline">My wishlist</p>
                </div>

              </div>
              <div className="h-max  w-80 bg-white shadow dark:bg-neutral-900 p-5  ">

                <div className="w-20 h-20  flex flex-col gap-2 ">

                  <p className="dark:text-neutral-200 text-sm underline">Mes Ventes</p>
                </div>

              </div>


            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

