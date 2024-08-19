"use client"
import React, { FC } from "react";
import Link from "next/link";
import NcImage from "../../../shared/NcImage/NcImage";
import LikeButton from "./LikeButton";
import Prices from "../../../shared/Prices/Prices";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { PRODUCTS } from "../../../data/data";
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../../shared/Button/ButtonSecondary";
import BagIcon from "./BagIcon";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";
import ModalQuickView from "./ModalQuickView";
import ProductStatus from "./ProductStatus";
import Image from "next/image";



const ProductCard = ({
 
  data = PRODUCTS[0],
  isLiked,
  product
}) => {
  const {
    title,
    price,
    description,
    sizes,
    variants,
    variantType,
    status,
    image,
  } = product || data;
  const [variantActive, setVariantActive] = React.useState(0);
  const [showModalQuickView, setShowModalQuickView] = React.useState(false);



  const notifyAddTocart = ({ size }) => {
    toast.custom(
      (t) => (
        <Transition
          as={'div'}
          appear
          show={t.visible}
          className="p-4 max-w-md w-full dark:bg-neutral-100 bg-black/80 backdrop-blur  shadow-lg rounded pointer-events-auto ring-1 vring-black/5 ring-white/10 dark:text-slate-900 text-slate-200"
          enter="transition-all duration-150"
          enterFrom="opacity-0 translate-y-40"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-40"
        >
          <p className="block text-base font-semibold leading-none">
            Added to cart!
          </p>
          <div className="border-t dark:border-slate-200 border-slate-700 my-4" />
          {renderProductCartOnNotify({ size })}
        </Transition>
      ),
      { position: "bottom-center", id: "nc-product-notify", duration: 2000 }
    );
  };

  const renderProductCartOnNotify = ({ size }) => {
    return (
      <div className="flex ">
        <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded ">
          <Image
            width={400}
            height={400}
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-sm font-medium truncate text-wrap ">{title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>
                    {variants ? variants[variantActive].title : `Natural`}
                  </span>
                  <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                  <span>{size || "XL"}</span>
                </p>
              </div>
              <Prices price={price} className="mt-0.5" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400">Qty 1</p>

            <div className="flex">
              <Link
                href={"/cart"}
                className="font-medium text-primary-6000 dark:text-primary-500 "
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getBorderClass = (Bgclass = "") => {
    if (Bgclass.includes("red")) {
      return "border-red-500";
    }
    if (Bgclass.includes("violet")) {
      return "border-violet-500";
    }
    if (Bgclass.includes("orange")) {
      return "border-orange-500";
    }
    if (Bgclass.includes("green")) {
      return "border-green-500";
    }
    if (Bgclass.includes("blue")) {
      return "border-blue-500";
    }
    if (Bgclass.includes("sky")) {
      return "border-sky-500";
    }
    if (Bgclass.includes("yellow")) {
      return "border-yellow-500";
    }
    return "border-transparent";
  };

  const renderVariants = () => {
    if (!variants || !variants.length || !variantType) {
      return null;
    }

    if (variantType === "color") {
      return (
        <div className="flex space-x-1">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${variantActive === index
                ? getBorderClass(variant.color)
                : "border-transparent"
                }`}
              title={variant.title}
            >
              <div
                className={`absolute inset-0.5 rounded-full z-0 ${variant.color}`}
              ></div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex ">
        {variants.map((variant, index) => (
          <div
            key={index}
            onClick={() => setVariantActive(index)}
            className={`relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${variantActive === index
              ? "border-black dark:border-slate-300"
              : "border-transparent"
              }`}
            title={variant.title}
          >
            <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
              <Image
                width={400}
                height={400}
                src={variant.thumbnail}
                alt="variant"
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderGroupButtons = () => {
    return (
      <div className="absolute bottom-0  group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <ButtonPrimary
          className="shadow-lg"
          fontSize="text-xs"
          sizeClass="py-2 px-4"
          onClick={() => notifyAddTocart({ size: "XL" })}
        >
          <BagIcon className="w-3.5 h-3.5 mb-0.5" />
          <span className="ml-1">Add to bag</span>
        </ButtonPrimary>
        <ButtonSecondary
          className="ml-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg"
          fontSize="text-xs"
          sizeClass="py-2 px-4"
          onClick={() => setShowModalQuickView(true)}
        >
          <ArrowsPointingOutIcon className="w-3.5 h-3.5" />
          <span className="ml-1">Quick view</span>
        </ButtonSecondary>



      </div>
    );
  };

  // const renderSizeList = () => {
  //   if (!sizes || !sizes.length) {
  //     return null;
  //   }

  //   return (
  //     <div className="absolute  bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
  //       {sizes.map((size, index) => {
  //         return (
  //           <div
  //             key={index}
  //             className="nc-shadow-lg w-10 h-10 rounded bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900"
  //             onClick={() => notifyAddTocart({ size })}
  //           >
  //             {size}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  return (
    <>
      <div
        className={` relative flex flex-col bg-transparent hover:shadow-lg  overflow-hidden transition-all rounded`}
        data-nc-id=""
      >

        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300  overflow-hidden z-1 group">


          <Link href={"/product"} className="block">

            <div className="relative  group  cursor-pointer">


              <NcImage
                containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
                src={image}
                className="object-cover w-full h-full drop-shadow-xl group-hover:opacity-0 transition-all duration-500"
              />
              <NcImage
                containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
                src={"https://picsum.photos/500/301"}
                className="object-cover w-full h-full drop-shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-0"
              />
            </div>
          </Link>





          <ProductStatus status={status} />
          <div className="group-hover:flex hidden">

            {/* <LikeButton liked={isLiked}  /> */}
          </div>

          {/* {sizes ? renderSizeList() : renderGroupButtons()} */}
          {
            renderGroupButtons()
          }        </div>

        <div className="space-y-1 px-2 pt-3 pb-3">
          {renderVariants()}

          <div>
            <h2
              className={`nc-ProductCard__title font-semibold transition-colors truncate text-sm cursor-pointer	 hover:underline `}
            >
              {title}
            </h2>
            <p className={`text-sm text-slate-500 dark:text-slate-400 mt-1 `}>
              {description}
            </p>
          </div>

          <div className="flex items-center">

            <StarIcon className="w-3 h-3  text-amber-400" />
            <StarIcon className="w-3 h-3  text-amber-400" />
            <StarIcon className="w-3 h-3  text-amber-400" />
            <span className="text-xs  text-slate-500 dark:text-slate-400">
              {4.5}
            </span>
          </div>


          <div className="flex justify-between items-center ">
            <Prices price={price} />
            <div className="flex items-center ">
              <div onClick={() => notifyAddTocart({ size: "XL" })} className="cursor-pointer hover:scale-[120%]">
                <BagIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICKVIEW */}
      <ModalQuickView
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      />
    </>
  );
};

export default ProductCard;
