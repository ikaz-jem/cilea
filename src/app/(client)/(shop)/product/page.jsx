"use client"
import React, { FC, useState } from "react";
import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import LikeButton from "./components/LikeButton";
import AccordionInfo from "./components/AccordionInfo";
import { StarIcon } from "@heroicons/react/24/solid";
import BagIcon from "./components/BagIcon";
import NcInputNumber from "../../../shared/NcInputNumber/NcInputNumber";
import { PRODUCTS } from "../../../data/data";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "./components/IconDiscount";
import Prices from "../../../shared/Prices/Prices";
import toast from "react-hot-toast";
// import SectionSliderProductCard from "components/SectionSliderProductCard";
import detail1JPG from "../../../images/products/detail1.jpg";
import detail2JPG from "../../../images/products/detail2.jpg";
import detail3JPG from "../../../images/products/detail3.jpg";
// import Policy from "./Policy";
import ButtonSecondary from "../../../shared/Button/ButtonSecondary";
// import SectionPromo2 from "components/SectionPromo2";
// import ModalViewAllReviews from "./ModalViewAllReviews";
// import NotifyAddTocart from "./NotifyAddTocart";
import Image from "next/image";
import ProdyctReviews from './components/Productreviews/ProductReview'
import ProductDetails from './components/ProductDetails/ProductDetails'
import ModalPhotos from '../../../shared/ModalPhotos/ModalPhotos'

const ProductDetailPage = () => {
  const { sizes, variants, status, allOfSizes } = PRODUCTS[0];
  const LIST_IMAGES_DEMO = [detail1JPG, detail2JPG, detail3JPG];

  const [variantActive, setVariantActive] = React.useState(0);
  const [sizeSelected, setSizeSelected] = React.useState(sizes ? sizes[0] : "");
  const [qualitySelected, setQualitySelected] = React.useState(1);
  const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] =useState(false);




  const [isOpen, setIsOpen] = useState(false);useState(false);
  const [openFocusIndex, setOpenFocusIndex] = useState(0);

  const handleOpenModal = (index) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };

  const handleCloseModal = () => setIsOpen(false);

  // const notifyAddTocart = () => {
  //   toast.custom(
  //     (t) => (
  //       <NotifyAddTocart
  //         productImage={LIST_IMAGES_DEMO[0]}
  //         qualitySelected={qualitySelected}
  //         show={t.visible}
  //         sizeSelected={sizeSelected}
  //         variantActive={variantActive}
  //       />
  //     ),
  //     { position: "top-right", id: "nc-product-notify", duration: 3000 }
  //   );
  // };

  const renderVariants = () => {
    if (!variants || !variants.length) {
      return null;
    }

    return (
      <div>
        <label htmlFor="">
          <span className="text-sm font-medium">
            Color:
            <span className="ml-1 font-semibold">
              {variants[variantActive].name}
            </span>
          </span>
        </label>
        <div className="flex mt-3">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer ${
                variantActive === index
                  ? "border-primary-6000 dark:border-primary-500"
                  : "border-transparent"
              }`}
            >
              <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                <Image
                  width={500}
                  height={500}
                  src={variant.thumbnail}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSizeList = () => {
    if (!allOfSizes || !sizes || !sizes.length) {
      return null;
    }
    return (
      <div>
        <div className="flex justify-between font-medium text-sm">
          <label htmlFor="">
            <span className="">
              Size:
              <span className="ml-1 font-semibold">{sizeSelected}</span>
            </span>
          </label>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="##"
            className="text-primary-6000 hover:text-primary-500"
          >
            See sizing chart
          </a>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-3">
          {allOfSizes.map((size, index) => {
            const isActive = size === sizeSelected;
            const sizeOutStock = !sizes.includes(size);
            return (
              <div
                key={index}
                className={`relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 ${
                  sizeOutStock
                    ? "text-opacity-20 dark:text-opacity-20 cursor-not-allowed"
                    : "cursor-pointer"
                } ${
                  isActive
                    ? "bg-primary-6000 border-primary-6000 text-white hover:bg-primary-6000"
                    : "border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                }`}
                onClick={() => {
                  if (sizeOutStock) {
                    return;
                  }
                  setSizeSelected(size);
                }}
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStatus = () => {
    if (!status) {
      return null;
    }
    const CLASSES =
      "absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 text-slate-900 dark:text-slate-300";
    if (status === "New in") {
      return (
        <div className={CLASSES}>
          <SparklesIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "50% Discount") {
      return (
        <div className={CLASSES}>
          <IconDiscount className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "Sold Out") {
      return (
        <div className={CLASSES}>
          <NoSymbolIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "limited edition") {
      return (
        <div className={CLASSES}>
          <ClockIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    return null;
  };

  const renderSectionContent = () => {
    return (
      <div className="space-y-7 2xl:space-y-8">
        {/* ---------- 1 HEADING ----------  */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Heavy Weight Shoes
          </h2>

          <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
            {/* <div className="flex text-xl font-semibold">$112.00</div> */}
            <Prices
              contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
              price={112}
            />

            <div className="h-7 border-l border-slate-300 dark:border-slate-700"></div>

            <div className="flex items-center">
              <a
                href="#reviews"
                className="flex items-center text-sm font-medium"
              >
                <StarIcon className="w-5 h-5 pb-[1px] text-yellow-400" />
                <div className="ml-1.5 flex">
                  <span>4.9</span>
                  <span className="block mx-2">·</span>
                  <span className="text-slate-600 dark:text-slate-400 underline">
                    142 reviews
                  </span>
                </div>
              </a>
              <span className="hidden sm:block mx-2.5">·</span>
              <div className="hidden sm:flex items-center text-sm">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span className="ml-1 leading-none">{status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}
        <div className="">{renderVariants()}</div>
        <div className="">{renderSizeList()}</div>

        {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
        <div className="flex space-x-3.5">
          <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
            <NcInputNumber
              defaultValue={qualitySelected}
              onChange={setQualitySelected}
            />
          </div>
          <ButtonPrimary
            className="flex-1 flex-shrink-0"
            // onClick={notifyAddTocart}
          >
            <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
            <span className="ml-3">Add to cart</span>
          </ButtonPrimary>
        </div>

        {/*  */}
        <hr className=" 2xl:!my-10 border-slate-200 dark:border-slate-700"></hr>
        {/*  */}

        {/* ---------- 5 ----------  */}
        <AccordionInfo />

        {/* ---------- 6 ----------  */}
        <div className="hidden xl:block">
          {/* <Policy /> */}
        </div>
      </div>
    );
  };



  

  return (
    <div className={`nc-ProductDetailPage   `}>
      {/* MAIn */}
      <main className="container mt-5 lg:mt-11 mx-auto">
        <div className="lg:flex">
          {/* CONTENT */}
          <div className="w-full lg:w-[60%] flex flex-col md:flex-row gap-5">
            {/* HEADING */}
            
             {/* <div className="grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-8 xl:mt-8"> */}
             <div className="flex md:flex-col gap-5">
              {[LIST_IMAGES_DEMO[1], LIST_IMAGES_DEMO[2]].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="aspect-w-11 xl:aspect-w-10 2xl:aspect-w-11 aspect-h-16"
                  >
                    <Image
                      width={500}
                      height={500}
                      src={item}
                      className="w-16 h-16 rounded-[2px] object-cover"
                      alt="product detail 1"
                    />
                  </div>
                );
              })}
            </div>
            
            
            <div className="relative">
              <div className=" cursor-pointer" onClick={()=> handleOpenModal(0)}>
                <Image
                  width={500}
                  height={500}
                  src={LIST_IMAGES_DEMO[0]}
                  className="w-full rounded object-cover"
                  alt="product detail 1"
                />
              </div>
              {renderStatus()}
              {/* META FAVORITES */}
              <LikeButton className="absolute right-3 top-3 " />
            </div>
           
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
            {renderSectionContent()}
          </div>
        </div>

        {/* DETAIL AND REVIEW */}
        <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
          <div className="block xl:hidden">
            {/* <Policy /> */}
          </div>
          <ModalPhotos
          imgs={LIST_IMAGES_DEMO}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
          uniqueClassName="nc-ProductDetailPage2__modalPhotos"
        />
          {<ProductDetails/>}

          <hr className="border-slate-200 dark:border-slate-700" />

          { <ProdyctReviews/> }

          <hr className="border-slate-200 dark:border-slate-700" />

          {/* OTHER SECTION */}
          

          {/* SECTION */}
          <div className="pb-20 xl:pb-28 lg:pt-14">
            {/* <SectionPromo2 /> */}
          </div>
        </div>
      </main>

      {/* MODAL VIEW ALL REVIEW */}
      {/* <ModalViewAllReviews
        show={isOpenModalViewAllReviews}
        onCloseModalViewAllReviews={() => setIsOpenModalViewAllReviews(false)}
      /> */}
    </div>
  );
};

export default ProductDetailPage;
